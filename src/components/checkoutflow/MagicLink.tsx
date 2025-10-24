import React, { useEffect, useRef, useState } from 'react'
import QRCode from 'qrcode'
import Cookies from 'js-cookie'

interface MagicLinkProps {
  height: number
  width: number
}

const MagicLink: React.FC<MagicLinkProps> = ({ height, width }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
    const [deviceType, setDeviceType] = useState<string | null>(null);

    useEffect(() => {
      if (typeof window !== 'undefined') {
          const userAgent = navigator.userAgent;
          if (/mobile/i.test(userAgent)) {
              setDeviceType('mobile');
          } else if (/tablet/i.test(userAgent)) {
              setDeviceType('tablet');
          } else if (/laptop|desktop|macintosh|windows/i.test(userAgent)) {
              setDeviceType('desktop');
          } else {
              setDeviceType('unknown');
          }
      }
    }, []);
  

    useEffect(() => {
      const generateQR = async () => {
        if (deviceType) {
          let deeplink = `https://bw1.in/1v40jqv?browser=${deviceType}`;
  
          const memId = Cookies.get('mem_id');
  
          if (memId && memId !== '0') {
            deeplink = `https://bw1.in/1v40jqv?browser=${deviceType}${
              memId && memId !== '0' ? `&mem_id=${memId}` : ''
            }`;
          }
  
          if (canvasRef.current) {
            try {
              await QRCode.toCanvas(canvasRef.current, deeplink, {
                width: width,
                height: height,
                color: {
                  dark: '#000000',
                  light: '#ffffff',
                },
                errorCorrectionLevel: 'H',
              });
            } catch (error) {
              console.error('Error generating QR code:', error);
            }
          }
        }
      };
  
      generateQR();
    }, [deviceType, width, height]); // Runs only once on mount

  return <canvas ref={canvasRef} id="magic-qr" />
}

export default MagicLink
