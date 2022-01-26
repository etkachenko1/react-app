# Front-end

Node.js Bloombreg framework setup via GoldenPath steps for setting up (one person in the group should do it, not everyone):

1) open WSL terminal
2) go to your front-end directory:

        $ cd <your path>
        
3) create node.js npm project directory:

        $ mkdir <your_project_name>
        
4) go to this directory first in order to run the command from step 5:

        $ cd <your_project_name>
        
5) run bb-node-gen:

        $ npx @bbnpm/bb-node-gen gen
        
6) answer the questions. the project is long-run service, not script, and NO BPKG is needed, as indicated by one of the mentors. 
7) congratulations, you have your node.js set up. Now in vs code you should see the new directory.
8) open terminal in vs code and via cd go to this newly created project directory. run three commands consecutively:

        $ npx create-react-app my-app
        $ cd my-app
        $ npm start
        
