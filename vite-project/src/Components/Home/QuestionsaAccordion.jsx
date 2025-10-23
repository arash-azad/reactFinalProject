import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
export default function AccordionUsage() {
  return ( 
    <div className='w-full flex justify-center my-[10vh] font-[700]'>
    <div className='w-[50vw] bg-black border-2 border-black shadow-md shadow-white' >
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography component="span"><b>How can I place an order?</b></Typography>
        </AccordionSummary>
        <AccordionDetails>
            Select your products, add them to the cart, and complete the checkout process.
        </AccordionDetails>
      </Accordion >
      <Accordion className='accordion'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography component="span"><b>How much is the shipping cost?</b></Typography>
        </AccordionSummary>
        <AccordionDetails>
    Shipping cost depends on your city and the product weight.
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography component="span"><b>Can I return a product?</b></Typography>
        </AccordionSummary>
        <AccordionDetails>
            Yes, you can return products within the return period.
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography component="span"> <b> How long does delivery take?</b></Typography>
        </AccordionSummary>
        <AccordionDetails>
            Delivery usually takes 7 business days, depending on your location.
        </AccordionDetails>
      </Accordion>
    </div>
    </div>
  );
}