import Github from "./Github";

function Projects() {


  return (
    <>
        <div className="flex w-full flex-col border-opacity-50">
            <a href="https://be-nc-news-ml9n.onrender.com/api" target="_blank">
                <div  className="card shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1),_0_10px_10px_-5px_rgba(0,0,0,0.04),_0_-10px_20px_-5px_rgba(0,0,0,0.1)]">
                    <div className="card-body">
                        <h2 className="card-title text">NC News Back-End API</h2>
                        <p>This is an API created for the purpose of building a news site application such as Reddit. I coded endpoints for articles, comments, users etc. which access a postgreSQL database containing sample data.</p>
                        <p>This application was created with a stack of<b> node.js, express.js, jest</b> and <b>postgreSQL. </b>It has a full-testing suite with over 100 tests and meticulous error handling</p>
                        <p>This is the general flow of the API:</p>
                        <ul className="feature-list">
                            <li><b>Endpoints - </b>were set up using Express routing, they listen for an HTTP request and direct the request to the relevant controller.</li>
                            <li><b>Errors - </b>If the request is invalid and for any reason not handled in the front end, each of the MVC's can identify 400 request (syntactically incorrect request) and 404 (valid request but non-existant target)</li>
                            <li><b>SQL - </b>Once a valid request is made the model will query the SQL DB, but in such a way that it is immune to SQL injection.</li>
                            <li><b>MVC - </b>Finally the controller will send a response containing the target data - the API follows a strict MVC pattern for consistency/readability.</li>
                        </ul>
                        <p>The testing suite utilises a test DB mirroring live and a seed function to reset the data upon every invocation of the testing suite - it then utilises supertest to emulate HTTP requests and evalates express responses.</p>
                        <div className="card-actions justify-end">
                        </div>
                    </div>
                </div>
            </a>
            <div style={{ marginBottom: "none", marginTop: "1rem"}} className="badges">
                <div style={{marginRight: "1rem"}} className="badge badge-primary badge-outline">node.js</div>
                <div style={{marginRight: "1rem"}} className="badge badge-secondary badge-outline">postgreSQL</div>
                <div className="badge badge-accent badge-outline">express.js</div>
                    <div style={{ marginTop: "0.5rem" }}>
                        <a href="https://github.com/josh-raftery/be-nc-news" target="_blank">
                            <Github />
                        </a>
                    </div>
            </div>
            <div style={{ marginTop: "none", marginBottom: "1rem"}} className="divider"></div>
            <a href="https://main--adorable-strudel-b4aa70.netlify.app" target="_blank">
                <div className="card card shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1),_0_10px_10px_-5px_rgba(0,0,0,0.04),_0_-10px_20px_-5px_rgba(0,0,0,0.1)]">
                    <div className="card-body">
                        <h2 className="card-title">NC News Front-End Application</h2>
                        <p>This is a for website displaying, reading and commenting on articles.</p>
                        <p>The application is feature-rich and has functionality for the following:</p>
                        <ul className="feature-list" >
                            <li><b>Topics Page - </b>listing all available topics on cards which will link you to articles for the specified topic.</li>
                            <li><b>Post Article Page - </b>allowing you to create an article of your own.</li>
                            <li><b>Article Filters - </b>you can sort by date, votes (likes), most comments and order by filters of top and bottom (asc, desc)</li>
                            <li><b>Day/Night mode - </b>adjusting the CSS from a lighter scheme to a dark one and vise versa - adjusting icons to remain a strong contrast.</li>
                            <li><b>Suggested Articles - </b>If you are using a wide display such as a laptop - suggested articles will fill the otherwise dead space to the side(s) of an article card</li>
                            <li><b>Pagination - </b>Articles are displayed 10 at a time and on a button press are added to the page</li>
                        </ul>
                        <p>Styling, Design and Accessability choices:</p>
                        <ul className="style-list" >
                            <li><b>Responsive - </b>Loading component displayed in between asynchronous processes, input fields turn red and display error message upon invalid input or bad connection.</li>
                            <li><b>Opimistic Rendering - </b>Where possible I used optimistic rendering for a more pleasant user experience.</li>
                            <li><b>Mobile First - </b>The application works well with any screen size utilising flex styling.</li>
                        </ul>
                        <p>* This is very much a work in progress - more to come! *</p>
                        <div className="card-actions justify-end">
                        </div>
                    </div>
                </div>
            </a>
            <div style={{marginTop: "1rem"}} className="badges">
                <div style={{marginRight: "1rem"}} className="badge badge-primary badge-outline">node.js</div>
                <div className="badge badge-secondary badge-outline">react.js</div> 
                    <div style={{ marginTop: "0.5rem" }}>
                        <a href="https://github.com/josh-raftery/fe-nc-news" target="_blank">
                            <Github />
                        </a>
                    </div>
                </div>
            <div className="divider"></div>
            <a href="https://joshraftery.netlify.app" target="_blank">
                <div className="card card shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1),_0_10px_10px_-5px_rgba(0,0,0,0.04),_0_-10px_20px_-5px_rgba(0,0,0,0.1)]">
                    <div className="card-body">
                        <h2 className="card-title">Portfolio Page</h2>
                        <p>Whoa, project-ception - a website to showcase all my projects!</p>
                        <p>A fairly simple react app where I tried to focus on some nice UI, including quite a premium (and totally necessary) day/night switch.</p>
                        <p>Pages for:</p>
                        <ul className="style-list" >
                            <li><b>Resume - </b>Resume embedded into the page using an iframe element, big download button</li>
                            <li><b>About - </b>All my links - utilised a 'mailto' anchor link for my gmail.</li>
                            <li><b>Projects - </b>A series of cards which are wrapped in a link to the hosted site, github buttons link to corresponding repo</li>
                        </ul>
                        <div className="card-actions justify-end">
                        </div>
                    </div>
                </div>
            </a>
            <div style={{marginTop: "1rem"}} className="badges">
                <div style={{marginRight: "1rem"}} className="badge badge-primary badge-outline">node.js</div>
                <div className="badge badge-secondary badge-outline">react.js</div> 
                    <div style={{ marginTop: "0.5rem" }}>
                        <a href="https://github.com/josh-raftery/portfolio-page" target="_blank">
                            <Github />
                        </a>
                    </div>
                </div>
            <div className="divider"></div>
        </div>
    </>
  );
}

export default Projects;
