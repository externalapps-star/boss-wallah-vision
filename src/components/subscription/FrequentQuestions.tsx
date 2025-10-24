import React, { useState } from 'react'
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import styles from './FrequentQuestions.module.css'

interface FAQProps {
  faqs: any
}

const FAQ = ({ faqs }: FAQProps) => {
  const faq = faqs.data

  const [expandedIndex, setExpandedIndex] = useState<number | false>(0)

  const handleChange = (index: number) => {
    setExpandedIndex(expandedIndex === index ? false : index)
  }

  return (
    <Box className={`mt-5 flex flex-col justify-center items-center ${styles.ffFaq}`}>
      <Typography
        className={styles.ffFaqHeading}
        sx={{ fontSize: { xs: '18px', sm: '20px' }, color: '#1d1d1e' }}
        component="h2"
      >
        Frequently asked questions
      </Typography>

      <Box className="mt-4 mb-5">
        {faq &&
          faq.map((faq: any, index: number) => (
            <Accordion
              className={styles.ffFaqQa}
              key={index}
              disableGutters
              elevation={0}
              expanded={expandedIndex === index}
              onChange={() => handleChange(index)}
              sx={{
                marginBottom: '0.5rem',
                width: '100%',
                maxWidth: '800px',
                '&::before': {
                  content: 'none',
                  height: '0px',
                },
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                className={styles.ffFaqQues}
                aria-controls={`panel${index}-content`}
                id={`panel${index}-header`}
              >
                <Typography
                  sx={{
                    fontWeight: expandedIndex === index ? 600 : 600,
                    transition: 'all 0.2s ease-in-out',
                  }}
                  className={styles.ffQues}
                >
                  {faq.qn}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className={styles.ffFaqAns}>{faq.ans}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
      </Box>
    </Box>
  )
}

export default FAQ
