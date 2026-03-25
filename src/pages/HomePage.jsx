import { useNavigate } from "react-router-dom";
import ResourceHubCard from "../components/ResourceHubCard";
import ResourceHubSectionHeader from "../components/ResourceHubSectionHeader";
import { resources} from "../data/resources";

export default function HomePage() {
  const navigate = useNavigate();
  const highlights = resources.filter((resource) => resource.featured).slice(0, 4);

  return (
    <>
   <section className="background-container">  
            
            <div className= "content">  
              <h2> 
                Take the step, find support either in sheltering, clothing or food in one place.
              </h2>
              <p>
              This website helps Sayreville residents financially in need of support either housing, food, or clothing. It connects and unites the community under one site.
            </p>

           <div className="buttons">
              <button
                type="button"
                className="btn"  
                   onClick= {()=> navigate("/directory")}
              >
                   Browse Resources
              </button>
             <button
                type="button"
                className="btn"
                   onClick  ={() => navigate("/references")}    
              >
                  View References
              </button>
              </div>
          </div>
      </section>

      <section className="section">
        <div className="container">
       <ResourceHubSectionHeader
            title="Community highlights"
            description="A few resources residents may want to review first."
          />

          <div className="grid-cards">
            {highlights.map((resource) => (
                <ResourceHubCard key={resource.id} resource={resource} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}