// HomePage component
const HomePage = {
    template: `
      <div>
        <h2>Welcome to My Portfolio</h2>
        <p>Hi, I'm Darcy. I'm a Coles Home delivery driver and a student majoring in Application Development at Deakin Uni.</p>
        <!-- Add Table -->
        <table>
          <tr>
            <th>Subject</th>
            <th>Grade</th>
          </tr>
          <tr>
            <td>Math</td>
            <td>A</td>
          </tr>
        </table>
      </div>
    `,
  };
  
  
// AboutPage component
const AboutPage = {
    template: `
      <div>
        <h2>About Me</h2>
        
        <h3>Profile</h3>
        <p>
          Hi, I'm Darcy, a 19-year-old aspiring freelancer in application development based in Lara, Victoria, Australia. 
          I am currently pursuing a Bachelor of IT at Deakin University with a major in Application Development.
        </p>
        
        <h3>Education</h3>
        <table>
          <thead>
            <tr>
              <th>Institution</th>
              <th>Major</th>
              <th>Year</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Deakin University</td>
              <td>Application Development</td>
              <td>2022-2025</td>
            </tr>
          </tbody>
        </table>
        
        <h3>Skills</h3>
        <ul>
          <li>HTML, CSS, Vue 3</li>
          <li>Java</li>
          <li>Python</li>
        </ul>
        
        <h3>Interests</h3>
        <p>
          When I'm not coding, you'll find me engaging in various outdoor and indoor activities.
        </p>
    `
  };
  
  
  // ContactPage component
  const ContactPage = {
    data() {
      return {
        email: '',
        subject: '',
        message: '',
        subjects: ['General Inquiry', 'Job Opportunity', 'Feedback'],
        showMessage: false
      };
    },
    template: `
      <div>
        <h2>Contact Me</h2>
        <form @submit.prevent="submitForm">
          <!-- Email -->
          <label for="email">Email:</label>
          <input type="email" v-model="email" id="email" />
          <br/>
          
          <!-- Subject Selection -->
          <label for="subject">Subject:</label>
          <select v-model="subject" id="subject">
            <option v-for="subj in subjects" :key="subj">{{ subj }}</option>
          </select>
          <br/>
          
          <!-- Optional Message -->
          <button type="button" @click="showMessage = !showMessage">
            Toggle Message Field
          </button>
          
          <textarea v-if="showMessage" v-model="message"></textarea>
          
          <button type="submit">Submit</button>
        </form>
      </div>
    `,
    methods: {
      submitForm() {
        alert(`Form submitted with: Email - ${this.email}, Subject - ${this.subject}, Message - ${this.message}`);
      }
    }
  };
  
// ProjectsPage component
const ProjectsPage = {
    data() {
      return {
        projects: [
          {
            id: 1,
            title: 'Personal Portfolio Website',
            description: 'A website built using HTML, CSS, and Vue 3 to showcase my skills and projects.',
            techStack: ['HTML', 'CSS', 'Vue 3']
          },
          {
            id: 2,
            title: 'JLC Automotive Website',
            description: 'Created a website for an automotive business which included working on both the front end and back end.',
            techStack: ['HTML', 'CSS', 'JavaScript', "liquid"],
            link: 'http://jlcautomotive.com.au'
          },
          // ... other projects
        ]
      };
    },
    template: `
      <div>
        <h2>Projects</h2>
        <div v-for="project in projects" :key="project.id">
          <h3>{{ project.title }}</h3>
          <p>{{ project.description }} <a :href="project.link" v-if="project.link" target="_blank">{{ project.link }}</a></p>
          <h4>Tech Stack</h4>
          <ul>
            <li v-for="tech in project.techStack" :key="tech">{{ tech }}</li>
          </ul>
        </div>
      </div>
    `
  };
  
  // Router definition
  const routes = [
    { path: '/', component: HomePage },
    { path: '/about', component: AboutPage },
    { path: '/contact', component: ContactPage },
    { path: '/projects', component: ProjectsPage },
  ];
  
  // Router setup
  const router = VueRouter.createRouter({
    history: VueRouter.createWebHistory(),
    routes,
  });
  
  // Main App component
  const App = {
    template: `
      <div id="app">
        <header>
          <h1>My Portfolio</h1>
        </header>
        <nav>
          <router-link to="/">Home</router-link> |
          <router-link to="/about">About</router-link> |
          <router-link to="/contact">Contact</router-link> |
          <router-link to="/projects">Projects</router-link>
        </nav>
        <main>
          <router-view></router-view>
        </main>
        <footer>
          <p>© Copyright 2023</p>
        </footer>
      </div>
    `,
  };
  
  // Initialize Vue App
  const app = Vue.createApp(App);
  app.use(router);
  app.mount('#app');
  