import { styled } from '@mui/material/styles'
import Stack from '@mui/material/Stack'
import Stepper from '@mui/material/Stepper'
import Step from '@mui/material/Step'
import StepLabel from '@mui/material/StepLabel'
import StepConnector, {
  stepConnectorClasses,
} from '@mui/material/StepConnector'
import CheckIcon from '@mui/icons-material/Check' // Import the check icon

const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 19, // Adjust this value to align the connector with the icon
    padding: -2,
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundColor: '#fff',
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundColor: '#63B16F',
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    height: 1,
    border: 0,
    backgroundColor: '#fff',
    borderRadius: 1,
    margin: -12,
  },
}))

const ColorlibStepIconRoot = styled('div')<{
  ownerState: { completed?: boolean; active?: boolean }
}>(({ theme, ownerState }) => ({
  backgroundColor: ownerState.completed ? '#fff' : '#1d1d1e', // Background color based on completion
  border: '1px solid #fff', // Border color
  zIndex: 1,
  color: '#fff', // Icon color based on completion
  width: 15,
  height: 15,
  display: 'flex',
  borderRadius: '50%',
  justifyContent: 'center',
  alignItems: 'center',
  ...(ownerState.active && {
    backgroundColor: '#F15F22',
    boxShadow: '0 4px 10px 0 #F15F22',
  }),
}))

function ColorlibStepIcon(props: any) {
  const { active, completed, className, icon } = props

  return (
    <ColorlibStepIconRoot
      ownerState={{ completed, active }}
      className={className}
    >
      {completed ? <CheckIcon sx={{ fontSize: 10, color: '#1d1d1e' }} /> : ''}
    </ColorlibStepIconRoot>
  )
}

export default function CustomizedSteppers({ steps, activeStep }: any) {
  return (
    <Stack sx={{ width: '100%' }} spacing={2}>
      <Stepper
        alternativeLabel
        activeStep={activeStep}
        connector={<ColorlibConnector />}
      >
        {steps.map((item: any, index: number) => (
          <Step key={index}>
            <StepLabel
              StepIconComponent={ColorlibStepIcon}
              sx={{
                '& .MuiStepLabel-label': {
                  color: '#1d1d1e',
                  fontSize: '12px',
                  marginTop: '10px',
                },
                '& .MuiStepLabel-label.Mui-active': {
                  color: '#1d1d1e',
                  fontSize: '12px',
                  fontWeight: '600',
                },
                '& .MuiStepLabel-label.Mui-completed': {
                  color: '#1d1d1e',
                  fontSize: '12px',
                  fontWeight: '600',
                },
              }}
            >
              {item}
            </StepLabel>
          </Step>
        ))}
      </Stepper>
    </Stack>
  )
}
