<div align = "center">
  <h1> Design System </h1>
</div>
<br>

<div align = 'center' justify-content = 'space-around' >
  <img width="1604" alt=" Design System" src="./project/screens/screen1.png">
</div>
<br>
<br>

|                                                                                     |                                                                                   |                                                                                        |
| :---------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------: |
| <img width="1604" alt="Landing Page - Desktop" src="./project/screens/screen2.png"> | <img width="1604" alt="Post an ad - Desktop" src="./project/screens/screen3.png"> |   <img width="1604" alt="Splash Page - Mobile" src="./project/screens/screen4.png">    |
|   <img width="1604" alt="Home Page - Mobile" src="./project/screens/screen5.png">   |   <img width="1604" alt="Ad Page - Mobile" src="./project/screens/screen6.png">   | <img width="1604" alt="Logged User Page - Mobile" src="./project/screens/screen7.png"> |

<br>

<p></p>

<p align="center">
 <a href="#theproject">The Project</a> •
 <a href="#target">Target</a> •
 <a href="#technologies">Technologies</a> •
 <a href="#route">Route</a> •
 <a href="#howtouse">How to Use</a>
</p>
<br>

<div id="theproject">
<h2> 📓 The Project </h2>
<p> Design System </p>
</div>

<div id="target">
<h2> 💡 Target </h2>
Development of an Design System at Ignite Lab, from Rocketseat
</div>
<br>

<div id="technologies">
<h2> 🛠 Technologies </h2>
The following tools were used in building the project:<br><br>

|                      Type                       |           Tools           |            References             |
| :---------------------------------------------: | :-----------------------: | :-------------------------------: |
|                       IDE                       |          VS CODE          |  https://code.visualstudio.com/   |
|              Design Interface Tool              | FIGMA (Prototype - UX/UI) |      https://www.figma.com/       |
|         Programming Language (Frontend)         |           REACT           |       https://reactjs.org/        |
|              Programming Language               |        TYPESCRIPT         |  https://www.typescriptlang.org/  |
| Open source API development ecosystem (Testing) |        HOPPSCOTCH         |      https://hoppscotch.io/       |
|     Utility-first CSS Framework (Frontend)      |       TAILWIND CSS        |     https://tailwindcss.com/      |
|    Tool for transforming CSS with JavaScript    |         POST CSS          |       https://postcss.org/        |
|      Graphic components (Frontend, Mobile)      |      PHOSPHOR ICONS       |    https://phosphoricons.com/     |
|     UI Isolated Component Building Library      |         STORYBOOK         |     https://storybook.js.org/     |
|        Navigation between pages (Mobile)        |     REACT NAVIGATION      |   https://reactnavigation.org/    |
|               Database (Backend)                |          SQLITE           | https://www.sqlite.org/index.html |
|  Promise based HTTP client - browser & Node.js  |           AXIOS           |      https://axios-http.com/      |
|             UI Components for React             |         RADIX-UI          |     https://www.radix-ui.com/     |
| Node.js and TypeScript ORM (Backend, Database)  |          PRISMA           |      https://www.prisma.io/       |
|    Tool to build frontend faster (Frontend)     |          VITE.JS          |        https://vitejs.dev/        |

<br>

<div align = 'center'>
  <h3>Testing</h3>
  <img width =' 100px ' src="./project/logo/hoppscotch_logo.png" />
  <br>
  <h3>Database</h3>
  <img height =' 100px ' left=' 20px ' src="./project/logo/prisma_logo.png" />
  <br>
  <h3>IDE</h3>
  <img height =' 100px ' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" />
  <br>
  <h3>UX/UI</h3>
  <img height =' 100px ' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" />
  <img height =' 100px ' left=' 20px ' src="./project/logo/phosphor-icons_logo.png"/>
  <img height =' 100px ' left=' 20px ' src="./project/logo/storybook_logo.png" />
  <br>
  <h3>Frontend</h3>
  <img width =' 100px ' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
  <img width =' 100px ' left=' 20px ' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" />
  <img height =' 50px ' left=' 20px ' src="./project/logo/tailwind-css_logo.svg" />
  <br>
  <img height =' 100px ' src="./project/logo/vite_logo.svg"/>
  <img height =' 100px ' left=' 20px ' src="./project/logo/radix-ui_logo.png"/>
  <br>
</div>

<div id="route">
<h2> 🔎 Route </h2>
  <ol>
    <li &nbsp;>Part 1 - Design System's visual structure<br/>
      <ul &nbsp;>
        <li &nbsp;>Design Systems
          <ul>
            <li>Convention created within companies and related to a similar visual structure that is applied across multiple projects</li>
          </ul>
        </li>
        <li &nbsp;>Build the project prototype (Figma):
          <ul>
            <li><b>Creating login form</b>
              <ul>
                <li>E-mail</li>
                <li>Password</li>
                <li>Remind me</li>
                <li>Login</li>
              </ul>
            </li>
            <li><b>Creating tokens with Figma</b></li>
            <li><b>Components</b>
              <ul>
                <li>Text</li>
                <li>Heading</li>
                <li>TextInput</li>
                <li>Button</li>
                <li>Checkbox</li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </li>
    <br>
    <li &nbsp;>Part 2 - From Figma to React, creating application<br/>
      <ul &nbsp;>
        <li &nbsp;>Creating React project: npm create vite@latest</li>
        <li &nbsp;>Install de dependencies from package.json: npm i</li>
        <li &nbsp;><b>Setting Tailwind CSS</b>
          <ul>
            <li>Install Tailwind CSS, PostCSS and autoprefixer: npm i tailwindcss postcss autoprefixer -D</li>
            <li>Start Tailwind CSS: npx tailwindcss init -p</li>
            <li>Customize contents, themes, fonts and plugins with Tailwind: ./tailwind.config.cjs</li>
            <li>Install VS Code extensions: Tailwind CSS IntelliSense, PostCSS Language Support, MDX</li>
            <li>Customize the global style: ./src/styles/global.css</li>
            <li>Customize classes at Tailwind: npm i clsx</li>
          </ul>
        </li>
        <li &nbsp;>Importing font: ./index.html</li>
        <li &nbsp;>Importing tokens: ./tailwind.config.cjs</li>
        <li &nbsp;><b>Storybook</b>
          <ul>
            <li>Setup: npx sb init --builder @storybook/builder-vite --use-npm</li>
            <li>Run: npm run storybook</li>
          </ul>
        </li>
        <li &nbsp;><b>Component</b>
          <ul>
            <li><em>Text</em>
              <ul>
                <li>React Component: ./src/components/text/Text.tsx</li>
                <li>Storybook: ./src/components/text/Text.stories.tsx</li>
                <li>Create feature (slot)
                  <ul>
                    <li>Install Radix-UI: npm i @radix-ui/react-slot</li>
                  </ul>
                </li>
              </ul>
            </li>
            <li><em>Heading</em>
              <ul>
                <li>React Component: ./src/components/heading/Heading.tsx</li>
                <li>Storybook: ./src/components/heading/Heading.stories.tsx</li>
              </ul>
            </li>
            <li><em>Button</em>
              <ul>
                <li>React Component: ./src/components/button/Button.tsx</li>
                <li>Storybook: ./src/components/button/Button.stories.tsx</li>
              </ul>
            </li>
            <li><em>Checkbox</em>
              <ul>
                <li>React Component: ./src/components/checkbox/Checkbox.tsx</li>
                <li>Storybook: ./src/components/checkbox/Checkbox.stories.tsx</li>
                <li>Create feature (checkbox)
                  <ul>
                    <li>Install Radix-UI: npm i @radix-ui/react-checkbox</li>
                  </ul>
                </li>
              </ul>
            </li>
            <li><em>TextInput</em>
              <ul>
                <li>React Component: ./src/components/textInput/TextInput.tsx</li>
                <li>Storybook: ./src/components/textInput/TextInput.stories.tsx</li>
                <li>Install Phosphor Icons: npm i phosphor-react</li>
              </ul>
            </li>
          </ul>
        </li>
        <li &nbsp;> Setting Arg Types for each component</li>
        <li &nbsp;> To run project: npm run dev</li>
      </ul>
    <br>
    <li &nbsp;>Part 3 - Testing and automating<br/>
      <ul &nbsp;>
        <li &nbsp;><b>Publish documentation</b>
          <ul>
            <li>Storybook deployer: npm i @storybook/storybook-deployer --save-dev</li>
            <li>Add a NPM script
              <ul>
                <li><em>For GitHub Pages</em><br/>
                  <pre><code>
                  {
                    "scripts": {
                      "deploy-storybook": "storybook-to-ghpages"
                    }
                  }
                  </code></pre>
                </li>
                <li><em>For AWS S3</em><br/>
                  <pre><code>
                  {
                    "scripts": {
                      "deploy-storybook": "storybook-to-aws-s3"
                    }
                  }
                  </code></pre>
                </li>
              <ul>
            </li>
            <li>Build Storybook script: npm run build-storybook</li>
            <li>Add storybook-static folder to .gitignore</li>
            <li><em>Upload project to GitHub</em>
              <ul>
                <li>New repository
                  <ol>
                    <li>Create: gh repo create</li>
                    <li>Choose "Push an existing local repository to GitHub"</li>
                    <li>Enter a path to local repository</li>
                    <li>Enter a repository name</li>
                    <li>Enter a description</li>
                    <li>Choose visibility (public, private or internal)</li>
                    <li>Add a remote? Y</li>
                    <li>What should the new remote be called? (origin)</li>
                  </ol>
                </li>
                <li>Add: git add .</li>
                <li>Commit: git commit -m "myProject"</li>
                <li>Branch: git branch -M branch_name</li>
                <li>Push: git push origin branch_name</li>
              </ul>
            </li>
          </ul>
        </li>
        <li &nbsp;>Storybook CI/CD (continuous integration)
          <ul>
            <li>New file: .github/workflows/deploy-docs.yml</li>
            <li>Settings based on GitHub Actions</li>
            <li>Add the following code at .storybook/main.cjs
              <pre><code>
              module.exports = {
                ...,
                viteFinal: (config, { configType }) => {
                  if (configType === 'PRODUCTION') {
                    config.base = '/design-system/'
                  }
                  return config
                }
              }
              </code></pre>
            </li>
            <li>Add force to npm ci script: .github/workflows/deploy-docs.yml</li>
          </ul>
        </li>
        <li &nbsp;><b>Creating interface with components</b>
          <ul>
            <li>Install Tailwind CSS, PostCSS and autoprefixer: npm i tailwindcss postcss autoprefixer -D</li>
            <li>Start Tailwind CSS: npx tailwindcss init -p</li>
            <li>Customize contents, themes, fonts and plugins with Tailwind: ./tailwind.config.cjs</li>
            <li>Install VS Code extensions: Tailwind CSS IntelliSense, PostCSS Language Support, MDX</li>
            <li>Customize the global style: ./src/styles/global.css</li>
            <li>Customize classes at Tailwind: npm i clsx</li>
          </ul>
        </li>
        <li &nbsp;><b>Accessibility addon</b>
          <ul>
            <li>Install: npm install @storybook/addon-a11y</li>
            <li>Settings based on GitHub Actions</li>
            <li>Add the following code at .storybook/main.cjs
              <pre><code>
              module.exports = {
                addons: [
                  ...,
                  '@storybook/addon-a11y'
                ],
                ...
              };
              </code></pre>
            </li>
            <li>Add force to npm ci script: .github/workflows/deploy-docs.yml</li>
          </ul>
        </li>
        <li &nbsp;>MSW addon: ./tailwind.config.cjs</li>
        <li &nbsp;><b>Storybook</b>
          <ul>
            <li>Setup: npx sb init --builder @storybook/builder-vite --use-npm</li>
            <li>Run: npm run storybook</li>
          </ul>
        </li>
      </ul>
    </li>
    <br>
  </ol>
</div>
<br>

<div id="howtouse">
<h2>🧪 How to use</h2>
  <ol &nbsp;>
    <li &nbsp;>Set the development environment at you local computer</li>
    <li &nbsp;>Clone the repository
      <ul>
        <li>git clone https://github.com/alexandrecpedro/eSports</li>
      </ul>
    </li>
    <li &nbsp;>Enter the project directory:
      <ul>
        <li>cd design-system</li>
      </ul>
    </li>
    <li><b>Testing</b>
      <ul>
        <li &nbsp;>Enter the directory
          <ul>
            <li>cd design-system</li>
          </ul>
        </li>
        <li &nbsp;>Install the dependencies
          <ul>
            <li>npm install</li>
          </ul>
        </li>
        <li &nbsp;>Run Project
          <ul>
            <li>npm run dev</li>
          </ul>
        </li>
        <li &nbsp;>Storybook
          <ul>
            <li>Setup: npx sb init --builder @storybook/builder-vite --use-npm</li>
            <li>Run: npm run storybook</li>
          </ul>
        </li>
      </ul>
    </li>
  </ol>
</div>
