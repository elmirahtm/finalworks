import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Accordion } from '@mui/material';

export default function AccordionUsage() {
  return (
    <div>
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
          sx={{color:"blue"}}

        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.

        </AccordionSummary>
        <AccordionDetails>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id nunc felis ultrices vitae iaculis at eu. Tincidunt pellentesque lobortis enim morbi nulla tortor tristique in. Massa semper quis imperdiet cursus egestas. Nulla eget purus et phasellus vehicula feugiat. Quam dictumst diam id tincidunt est.

        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.

        </AccordionSummary>
        <AccordionDetails>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet autem labore possimus, quidem beatae magnam praesentium aperiam aut atque architecto molestias expedita mollitia odio omnis optio unde est nobis earum?
      Placeat, impedit culpa? Modi soluta in doloremque quae autem ducimus, illum dolorem pariatur, laboriosam tenetur veritatis quo qui optio rerum similique facilis ipsa, aliquid magni asperiores nam illo. Ad, aliquam.
        </AccordionDetails>
      </Accordion>
      <Accordion >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.

        </AccordionSummary>
        <AccordionDetails>
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus quas illo rem magnam repellendus, totam neque odit amet dicta quis! Excepturi deserunt earum sit illum dolorum iusto nostrum, adipisci suscipit.
        </AccordionDetails>
      </Accordion>
    </div>
  );
}