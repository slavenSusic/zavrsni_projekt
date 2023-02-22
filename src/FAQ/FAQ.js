import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";


export default function FAQ() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <>
      <h2 className="font-bold text-6xl p-10 max-[575px]:text-3xl">Frequently Asked Questions</h2>

      <h2 className="text-3xl p-10 mr-14 font-bold">General</h2>
      <div className="font-bold py-20 mx-20 max-[450px]:mx-10">
        <Accordion
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography sx={{  flexShrink: 1 }}>
              What is Self-managed Commerce?
            </Typography>
            <Typography sx={{ color: "text.secondary" }}></Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Self-managed Commerce is the non-custodial Commerce offering. You
              have full control of your crypto balance via a 12-word seed
              phrase. If you lose access to your 12-word seed phrase your funds
              will be irrecoverable and Coinbase will not be able to recover
              your phrase or funds on your behalf. 
             
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2bh-content"
            id="panel2bh-header"
          >
            <Typography sx={{  flexShrink: 1 }}>
              {" "}
              How do I sign up for an account?
            </Typography>
            <Typography sx={{ color: "text.secondary" }}></Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className="">
              You can sign up for a Self-managed Commerce account by selecting
              “Get started” under the Self-managed section here.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel3"}
          onChange={handleChange("panel3")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3bh-content"
            id="panel3bh-header"
          >
            <div className="">
              <Typography sx={{ flexShrink: 1 }}>
                <p className="">
                  Which cryptocurrencies can do you accept?
                </p>
              </Typography>
            </div>
            <Typography sx={{ color: "text.secondary" }}></Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              We currently support ApeCoin, Bitcoin, Bitcoin Cash, DAI,
              Dogecoin, Ethereum, Litecoin, SHIBA INU, Tether and USD Coin. We
              also support MATIC, USD Coin, and Wrapped Ether (WETH) on Polygon.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel4"}
          onChange={handleChange("panel4")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel4bh-content"
            id="panel4bh-header"
          >
            <Typography sx={{ flexShrink: 1 }}>
              How much does it cost to use Coinbase Commerce?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Coinbase Commerce charges a 1% transaction fee. For additional
              information, please view our Help Center article here.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel41"}
          onChange={handleChange("panel41")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel4bh-content"
            id="panel4bh-header"
          >
            <Typography sx={{flexShrink: 1 }}>
              Are there role permissions available to allow for multiple users
              to log into the same account with different credentials?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              At this time, Commerce only supports one email per account.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>


{/* <---------drugi-----------> */}


      
     
      <h2 className="text-3xl p-10 m-r-14 font-bold">Crypto general questions</h2>
      <div className="py-20 mx-20 max-[450px]:mx-10">
        <Accordion
          expanded={expanded === "panel5"}
          onChange={handleChange("panel5")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography sx={{flexShrink: 1 }}>
            How are the prices calculated for the various cryptocurrencies?
            </Typography>
            <Typography sx={{ color: "text.secondary" }}></Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
            Please refer to the Market Data section of the methodology for detailed information on this topic.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel6"}
          onChange={handleChange("panel6")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2bh-content"
            id="panel2bh-header"
          >
            <Typography sx={{ flexShrink: 1 }}>
              {" "}
              What is "Market Capitalization" and how is it calculated?
            </Typography>
            <Typography sx={{ color: "text.secondary" }}></Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className="">
            Market Capitalization is one way to rank the relative size of a cryptocurrency. It's calculated by multiplying the Price by the Circulating Supply.

Market Cap = Price X Circulating Supply.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel7"}
          onChange={handleChange("panel7")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3bh-content"
            id="panel3bh-header"
          >
            <div className="">
              <Typography sx={{ flexShrink: 1 }}>
                <p className="">What is the difference between "Circulating Supply", "Total Supply", and "Max Supply"?</p>
              </Typography>
            </div>
            <Typography sx={{ color: "text.secondary" }}></Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
            Circulating Supply is the best approximation of the number of coins that are circulating in the market and in the general public's hands.
Total Supply is the total amount of coins in existence right now (minus any coins that have been verifiably burned).
Max Supply is the best approximation of the maximum amount of coins that will ever exist in the lifetime of the cryptocurrency.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel8"}
          onChange={handleChange("panel8")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel4bh-content"
            id="panel4bh-header"
          >
            <Typography sx={{flexShrink: 1 }}>
            What is the difference between a "Coin" and a "Token" on the site?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
            A Coin is a cryptocurrency that can operate independently.

A Token is a cryptocurrency that depends on another cryptocurrency as a platform to operate. Check out the crypto tokens listings to view a list of tokens and their respective platforms.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
{/* ---------treći------ */}
<h2 className="text-3xl p-10 m-r-14 font-bold">Auto-conversions</h2>
    
      <div className="py-10 mx-20  max-[450px]:mx-10">
        <Accordion className=""
          expanded={expanded === "panel9"}
          onChange={handleChange("panel9")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography sx={{flexShrink: 1 }}>
            Do my funds settle immediately? How are you reducing our risk of crypto volatility?
            </Typography>
            <Typography sx={{ color: "text.secondary" }}></Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
            After your customer makes a payment, funds are sent to an internal Coinbase account where we collect a 1% fee in the payment cryptocurrency. Upon fee collection, our internal account will convert the remaining crypto to USD which will subsequently be deposited into your Coinbase Exchange account.  For more information on Auto Conversions, please view our Help Center article here.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel10"}
          onChange={handleChange("panel10")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2bh-content"
            id="panel2bh-header"
          >
            <Typography sx={{flexShrink: 1 }}>
              {" "}
              Am I guaranteed to receive the full amount requested?
            </Typography>
            <Typography sx={{ color: "text.secondary" }}></Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className="">
            On-chain payments require confirmation by the decentralized network to finalize payment. In that period of time, price fluctuations may occur causing a discrepancy in amount received versus amount requested. 
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel11"}
          onChange={handleChange("panel11")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3bh-content"
            id="panel3bh-header"
          >
            <div className="">
              <Typography sx={{ flexShrink: 1 }}>
                <p className="">Once USD has settled on Cry/pro Exchange, how do I withdraw the funds to a bank account?</p>
              </Typography>
            </div>
            <Typography sx={{ color: "text.secondary" }}></Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
            You can withdraw USD to your linked bank account by going to your Exchange account and selecting; Portfolios - Withdraw - USD - Bank account

You can withdraw via wire and ACH.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel12"}
          onChange={handleChange("panel12")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel4bh-content"
            id="panel4bh-header"
          >
            <Typography sx={{flexShrink: 1 }}>
            Can my USD deposits on Exchange be withdrawn to my bank account automatically?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
            Yes. Please view our Exchange API docs..
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </>
  );
}
