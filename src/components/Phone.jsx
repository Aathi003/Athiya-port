import { forwardRef } from "react";
import { motion } from "framer-motion";

function Bars({ heights }) {
  return (
    <div className="bars">
      {heights.map((h, i) => (
        <motion.i
          key={i}
          style={{ height: `${h}%` }}
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 + i * 0.08, ease: [0.2, 0.7, 0.2, 1] }}
        />
      ))}
    </div>
  );
}

function FitnessScreen({ title, ringLabel, ringValue, bars }) {
  return (
    <>
      <small style={{ letterSpacing: ".06em" }}>SPORTSTECH NEO</small>
      <h4>{title}</h4>
      <div className="rg">
        <div>
          <small>{ringLabel}</small>
          <b>{ringValue}</b>
        </div>
      </div>
      <div className="g2">
        <div>
          <small>Daily Goal</small>
          <b>84%</b>
        </div>
        <div>
          <small>Rewards</small>
          <b>2.4 NEO</b>
        </div>
      </div>
      <Bars heights={bars} />
    </>
  );
}

const screens = {
  hero: {
    theme: "dk",
    body: <FitnessScreen title="Hello, Athi" ringLabel="Steps" ringValue="8,432" bars={[40, 70, 52, 86, 62]} />,
  },
  fit: {
    theme: "dk",
    body: <FitnessScreen title="Rewards Center" ringLabel="XP Points" ringValue="1,280" bars={[80, 55, 92, 68, 78]} />,
  },
  fin: {
    theme: "lt",
    body: (
      <>
        <h4>Direct Surety</h4>
        <div className="in2"><span>Bond Amount</span><b>₹ 2,50,000</b></div>
        <div className="in2"><span>Term</span><b>12 Months</b></div>
        <div className="in2"><span>Rate</span><b>7.5%</b></div>
        <div className="res"><small>Estimated Premium</small><b>₹ 18,750</b></div>
        <div className="li"><div>Coverage summary</div><div>Payment schedule</div><div>Save calculation</div></div>
      </>
    ),
  },
  nig: {
    theme: "nt",
    body: (
      <>
        <h4>Clubinn Night Life</h4>
        <div className="pos" />
        <div className="ev"><span>DJ Vortex — 10:30 PM</span><b>₹999</b></div>
        <div className="ev"><span>Neon Roof Session</span><b>Book</b></div>
        <div className="ev"><span>City Pulse Arena</span><b>Passes</b></div>
      </>
    ),
  },
  xtm: {
    theme: "bl",
    body: (
      <>
        <h4>XTRM</h4>
        <div className="cv"><span>USD 300</span><span>→</span><span>EUR 278</span></div>
        <div className="gr"><i /></div>
        <div className="li"><div>Transfer fee • $2.4</div><div>Rate lock • 12 min</div><div>Recipient verified</div></div>
      </>
    ),
  },
  tax: {
    theme: "mp",
    body: (
      <>
        <h4>RebuStar</h4>
        <div className="map">
          <i style={{ top: "24%", left: "18%" }} />
          <i style={{ top: "52%", right: "24%" }} />
          <i style={{ top: "71%", left: "46%" }} />
        </div>
        <div className="li">
          <div><b>Airport Ride</b> • 12 min • ₹345</div>
          <div>Daily Ride</div>
          <div>Outstation</div>
          <div>Rental</div>
        </div>
      </>
    ),
  },
  food: {
    theme: "fd",
    body: (
      <>
        <h4>Fooza</h4>
        <div className="fh"><div className="pl" /></div>
        <div className="li"><div>Bowl Combo • 25 min</div><div>Wrap Meal • 18 min</div><div>Fresh Juices • 12 min</div></div>
      </>
    ),
  },
};

const Phone = forwardRef(function Phone({ screen, big = false, style }, ref) {
  const s = screens[screen];
  return (
    <motion.div className={`phone${big ? " big" : ""}`} aria-hidden="true" ref={ref} style={style}>
      <div className="fr">
        <div className="isl" />
        <div className={`scr ${s.theme}`}>
          <div className="st"><span>9:41</span><span>●●● ▮</span></div>
          {s.body}
          <div className="tb"><i /><i /><i /><i /></div>
          <div className="hi" />
        </div>
      </div>
    </motion.div>
  );
});

export default Phone;
