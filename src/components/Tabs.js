import { useState } from "react";
const Tabs = () => {
  const types = ['all', 'active', 'complete', 'reminder'];
  const [active, setActive] = useState(types[0]);

  console.log(active)
  return (
    <>
      <div className="tabs">
        <div className="tabs-nav">
          {
            types.map(type => (
              <div className="nav-item" id={type} key={type} onClick={() => setActive(type)}>{type}</div>
            ))
          }
        </div>
        <div className="tabs-content">
          {active==='all' && <div className="tab-1">all content</div>}
          {active==='active' && <div className="tab-2">active content</div>}
          {active==='complete' && <div className="tab-3">complete content</div>}
          {active==='reminder' && <div className="tab-4">reminder content</div>}
        </div>
      </div>
    </>
  )
}

export default Tabs;
