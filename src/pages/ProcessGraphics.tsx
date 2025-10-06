import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { removeBackground, loadImageFromUrl } from '@/utils/backgroundRemoval';
import { Download, Loader2 } from 'lucide-react';

const ProcessGraphics = () => {
  const [processing, setProcessing] = useState(false);
  const [currentImage, setCurrentImage] = useState('');
  const [progress, setProgress] = useState({ current: 0, total: 0 });
  const [processedImages, setProcessedImages] = useState<{ original: string; processed: string }[]>([]);

  const graphicsToProcess = [
    '/lovable-uploads/briefcase.png',
    '/lovable-uploads/cafe.png',
    '/lovable-uploads/cloth-store.png',
    '/lovable-uploads/compass.png',
    '/lovable-uploads/crown.png',
    '/lovable-uploads/delivery-box.png',
    '/lovable-uploads/door.png',
    '/lovable-uploads/globe.png',
    '/lovable-uploads/growth-bar.png',
    '/lovable-uploads/growth-chart.png',
    '/lovable-uploads/idea-bulb.png',
    '/lovable-uploads/launch-rocket.png',
    '/lovable-uploads/opportunity-key.png',
    '/lovable-uploads/plant-seedling.png',
    '/lovable-uploads/policy-document.png',
    '/lovable-uploads/confetti.png',
    '/lovable-uploads/medal.png',
    '/lovable-uploads/paper-plane.png',
    '/lovable-uploads/factory.png',
    '/lovable-uploads/handcrafts.png',
    '/lovable-uploads/modern-store.png'
  ];

  const processAllImages = async () => {
    setProcessing(true);
    setProcessedImages([]);
    setProgress({ current: 0, total: graphicsToProcess.length });

    const results: { original: string; processed: string }[] = [];

    for (let i = 0; i < graphicsToProcess.length; i++) {
      const imagePath = graphicsToProcess[i];
      setCurrentImage(imagePath);
      setProgress({ current: i + 1, total: graphicsToProcess.length });

      try {
        // Load the image
        const img = await loadImageFromUrl(imagePath);
        
        // Remove background
        const blob = await removeBackground(img);
        
        // Create blob URL for preview
        const blobUrl = URL.createObjectURL(blob);
        
        results.push({ original: imagePath, processed: blobUrl });
        setProcessedImages([...results]);
      } catch (error) {
        console.error(`Failed to process ${imagePath}:`, error);
      }
    }

    setProcessing(false);
    setCurrentImage('');
  };

  const downloadImage = (blobUrl: string, originalPath: string) => {
    const link = document.createElement('a');
    link.href = blobUrl;
    const filename = originalPath.split('/').pop()?.replace('.png', '-transparent.png') || 'image.png';
    link.download = filename;
    link.click();
  };

  const downloadAll = () => {
    processedImages.forEach((img, index) => {
      setTimeout(() => {
        downloadImage(img.processed, img.original);
      }, index * 500);
    });
  };

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">Graphics Background Remover</h1>
          <p className="text-muted-foreground mb-6">
            Process all custom graphics to remove backgrounds
          </p>
          
          <div className="flex gap-4 justify-center">
            <Button 
              onClick={processAllImages}
              disabled={processing}
              size="lg"
            >
              {processing ? (
                <>
                  <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                  Processing {progress.current}/{progress.total}
                </>
              ) : (
                'Process All Images'
              )}
            </Button>

            {processedImages.length > 0 && (
              <Button 
                onClick={downloadAll}
                variant="outline"
                size="lg"
              >
                <Download className="w-5 h-5 mr-2" />
                Download All ({processedImages.length})
              </Button>
            )}
          </div>

          {currentImage && (
            <p className="text-sm text-muted-foreground mt-4">
              Currently processing: {currentImage}
            </p>
          )}
        </div>

        {/* Results Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {processedImages.map((img, index) => (
            <div key={index} className="border rounded-lg p-4 space-y-4">
              <div className="space-y-2">
                <p className="text-sm font-semibold text-center">Original</p>
                <div className="bg-gray-100 rounded-lg p-4 flex items-center justify-center h-40">
                  <img 
                    src={img.original} 
                    alt="Original"
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <p className="text-sm font-semibold text-center text-primary">Transparent</p>
                <div className="bg-checkerboard rounded-lg p-4 flex items-center justify-center h-40">
                  <img 
                    src={img.processed} 
                    alt="Processed"
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
              </div>

              <Button 
                onClick={() => downloadImage(img.processed, img.original)}
                variant="outline"
                size="sm"
                className="w-full"
              >
                <Download className="w-4 h-4 mr-2" />
                Download
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProcessGraphics;
