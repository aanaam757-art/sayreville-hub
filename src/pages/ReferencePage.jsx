export default function ReferencePage() {
  const sources = [
    {
      name: "Hands of Hope for the Community",
      url: "https://www.hohnj.org/",
    },
    {
      name: "Sayreville Care & Share Food Bank",
      url: "https://www.foodhelpline.org/resources/sayreville-care-share-food-bank",
    },
    {
      name: "Dress for Success Central New Jersey",
      url: "https://centralnj.dressforsuccess.org/",
    },
    {
      name: "New Jersey Housing Resource Center",
      url: "https://www.nj.gov/njhrc/",
    },
    {
      name: "Middlesex County Office of Human Services",
      url: "https://www.middlesexcountynj.gov/government/departments/department-of-community-services/office-of-human-services",
    },
    {
      name: "Middlesex County Service Locator",
      url: "https://www.middlesexcountynj.gov/government/departments/department-of-community-services/middlesex-county-service-locator",
    },
    {
      name: "Sayreville Recreation Department",
      url: "https://sayrevillenj.myrec.com/info/default.aspx",
    },
    {
      name: "Sayreville Clean Communities",
      url: "https://www.sayreville.com/cn/webpage.cfm?tpid=12852",
    },
  ];

  return (
    <section className="section">
      <div className="container">
        <div>
          <h2 className="title">Reference Page</h2>
          <p className="description">
            This page lists the sources used to create the website and includes
            the required copyright checklist and work log.
          </p>

          <div className="card">
            <h3>Sources of information</h3>
            <ul>
              {sources.map((source) => (
                <li key={source.url}>
                  <a href={source.url} target="_blank" rel="noreferrer">
                    {source.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="card">
            <h3>Required documents</h3>
            <ul>
              <li>
                <a href="/CommuStudent-Copyright-Checklist.pdf" target="_blank" rel="noreferrer">
                  Student Copyright Checklist (PDF)
                </a>
              </li>
              <li>
 <a href="/Community-Hub/Work-Log.pdf" target="_blank" rel="noreferrer"> 
                  Work Log (PDF)
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}