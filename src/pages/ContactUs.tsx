import { Box, Typography } from '@mui/material'
import { Container } from '@mui/system'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const ContactUs = () => {
  const navigate = useNavigate()

  return (
    <Container>
      <Typography
        component="h1"
        sx={{
          fontWeight: 600,
          fontSize: {
            xs: '24px',
            md: '36px',
          },
          lineHeight: {
            xs: '28px',
            md: '42px',
          },
          color: '#1d1d1e',
          textAlign: 'center',
          marginTop: '100px',
          marginBottom: '40px',
        }}
      >
        Contact Us
      </Typography>
      
      {/* Back Button */}
      <div className="mb-8">
        <Button
          variant="ghost"
          onClick={() => navigate('/')}
          className="mb-6 flex items-center gap-2"
        >
          <ArrowLeft className="w-4 h-4" />
          Home
        </Button>
      </div>

      <Box
        sx={{
          marginTop: '0px',
          width: '100%',
          maxWidth: '1200px',
          mx: 'auto',
          border: '1px solid rgba(29, 29, 30, 0.23)',
          marginBottom: '40px',
          borderRadius: '8px',
          overflow: 'hidden',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            p: 3,
          }}
        >
          <Box sx={{ width: '100%' }}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                gap: {
                  xs: 0,
                  md: 4,
                },
              }}
            >
              {/* Left Side - Address */}
              <Box sx={{ flex: 1 }}>
                <Typography
                  variant="h4"
                  component="h2"
                  sx={{
                    fontWeight: 600,
                    fontSize: { xs: '17px', md: '20px' },
                    lineHeight: { xs: '22px', md: '28px' },
                    color: '#1d1d1e',
                    mb: { xs: '10px', md: '20px' },
                    textAlign: 'left',
                  }}
                >
                  Address
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    fontWeight: 500,
                    fontSize: { xs: '12px', md: '14px' },
                    lineHeight: { xs: '12px', md: '16px' },
                    color: '#1d1d1e',
                    mb: {
                      xs: '10px',
                      md: '20px',
                    },
                    textAlign: 'left',
                  }}
                >
                  4th Floor, Brigade Software Park, Banashankari 2nd Stage,
                  Bengaluru, Karnataka - 560070
                </Typography>
              </Box>

              {/* Right Side - Contact */}
              <Box sx={{ flex: 1 }}>
                <Typography
                  variant="h4"
                  component="h2"
                  sx={{
                    fontWeight: 600,
                    fontSize: { xs: '17px', md: '20px' },
                    lineHeight: { xs: '22px', md: '28px' },
                    color: '#1d1d1e',
                    mb: { xs: '12px', md: '16px' },
                    textAlign: 'left',
                  }}
                >
                  Contact
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    fontWeight: 500,
                    fontSize: { xs: '12px', md: '14px' },
                    lineHeight: { xs: '16px', md: '20px' },
                    color: '#1d1d1e',
                    textAlign: 'left',
                  }}
                >
                  <strong>Phone:</strong> +91 8069415419 <br />
                  <strong>Email:</strong> support@bosswallah.ai
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Container>
  )
}

export default ContactUs

