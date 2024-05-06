const { exec } = require('node:child_process')
const path     = require('path');
const fs       = require('fs');


/*
*/
var deleteUnnecesaryFiles = async(dest_path, name) => {
  const dest_path_aux = dest_path.replace(/\\/g, '/');

  fs.readdirSync(dest_path_aux).forEach(file => {
    if (!file.includes(name)) {
      fs.rmSync(path.join(dest_path_aux, file), { recursive: true }, err => {
       
      });
    }
  });
}


/*
 */
var executeUrl = async (url) => {

  try {
    const response = await fetch(url);

    if (response.status === 200) {
      return await response.json();

    } else if (response.status === 404) {
      console.log('Error 404 No content avilable')

    } else {
      console.error('There was a problem on the checked url:', error);
      throw error;
    }

  } catch (error) {
    console.error('There was a problem with the fetch operation:', error);
    throw error;
  }
}


/*
*/
var deleteDirectoryRecursive = directoryPath => {
  if (fs.existsSync(directoryPath)) {
      fs.readdirSync(directoryPath).forEach((file, index) => {
          const curPath = path.join(directoryPath, file);
          if (fs.lstatSync(curPath).isDirectory()) { 
              deleteDirectoryRecursive(curPath);
          } else { // delete file
              fs.unlinkSync(curPath);
          }
      });
      fs.rmdirSync(directoryPath);
  }
}


/*
*/
var cloneGithubRepositories = async(data) => {
  let result = []

  for (const element of data) {
    let name      = element.name
    let url       = element.clone_url
    let dest_path = ''
    let files     = ''

    // Do not sync actual repository
    if (name != 'harmonize-tools.github.io') {

      // Create destination repository
      dest_path = path.join("public", 'repositories', name)
      if (fs.existsSync(dest_path)) {
        deleteDirectoryRecursive(dest_path)
      }
      if (!fs.existsSync(dest_path)) {
        fs.mkdirSync(dest_path, { recursive: true });
      }
      
      // Clone Github repository
      const { stdout, stderr } = await execPromise(`git clone ${url} ${dest_path}`);

      // Eliminar archivos innecesarios
      await deleteUnnecessaryFiles(dest_path, "harmonize_readme")

    }
  }

  const a = 0
}


/*
*/
var htmlToJsxAdapted = (input_path, output_path) => {
  fs.readFile(input_path, 'utf8', (err, html_code) => {
    var converter = new HTMLtoJSX({
      createClass: false,
      outputClassName: 'AwesomeComponent'
    });
    var output = converter.convert(html_code);

    fs.writeFile(output_path, output, (err) => {
      if (err) {
          console.error('Error writing HTML file:', err);
          return;
      }
      console.log('HTML file has been saved successfully.');
    });
  });
}


/* 
*/
var executePythonCode = (name_script, args) => {

  exec (`python ${name_script} ${args}`, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error: ${error.message}`)
      return;
    }
    if (stderr) {
      console.error(`Error: ${stderr}`)
      return;
    }
    console.log(`Output: ${stdout}`)
  })
}


/*
*/
var listAndExecutePythonCode = () => {

  // Transform the files to html files (execute the python script)
  const directoryPath = 'public\\repositories';

  let list_files = []

  // List all the files from the different repositories
  const folders_aux = fs.readdirSync(directoryPath).filter(function (file) {
    return fs.statSync(directoryPath+'/'+file).isDirectory();
  });

  for (const folder of folders_aux){
    const folder_aux = path.join(directoryPath, folder, 'harmonize_readme');

    const files_aux = fs.readdirSync(folder_aux).filter(function (file) {
      return fs.statSync(folder_aux+'/'+file).isFile();
    });

    for (const file of files_aux){
      if (file.includes('README')){
        list_files.push(path.join(folder_aux, file))
      }
    }
  }

  // Exe cute the python code for each file
  const path_script = path.join('utils', 'readmeToHtml.py')
  for (const arg_file of list_files){
    executePythonCode (path_script, arg_file)
  }
}


/*
*/
var createPageRepositories = () => {
  const directoryPath = path.join('.', 'public', 'repositories');
  const template_path = path.join('.', 'utils', 'page_template.tsx'); // Replace with the path to your source file

  // List all the files from the different repositories
  const folders_aux = fs.readdirSync(directoryPath).filter(function (file) {
    return fs.statSync(directoryPath+'/'+file).isDirectory();
  });
    
  // Read the content of the source file
  fs.readFile(template_path, 'utf8', (err, template_data) => {
    if (err) {
      console.error('Error reading file:', err);
      return;
    }

    folders_aux.forEach((repository) => {
      let destination_path = path.join('app', '(toolkits)', repository); // Replace with the path to your destination file
      let modified_template = template_data.replace('template', repository);

      // If the path does not exist, create it
      fs.mkdir(destination_path, { recursive: true }, (err) => {
        if (err) {
          console.error('Error creating directory:', err);
          return;
        }

        // Write the modified content to the destination file
        fs.writeFile(path.join(destination_path, 'page.tsx'), modified_template, 'utf8', (err) => {
          if (err) {
            console.error('Error writing file:', err);
            return;
          }
          console.log('File copied and modified successfully.');
        });
      });
    });
  });
}


/*
*/
var createMainPageRepositories = () => {
  let config_list      = []
  let name_data        = ''
  let description_data = ''
  const directory_path = path.join('.', 'public', 'repositories');
  const card_path = path.join('.', 'cards');
  const output_path    = path.join('.', 'public', 'config.json');

  const folders_aux = fs.readdirSync(directory_path).filter(function (file) {
    return fs.statSync(directory_path+'/'+file).isDirectory();
  });

  folders_aux.forEach((repository) => {
    let path_aux = path.join(directory_path, repository, 'harmonize_readme', 'config.json')
    let json_config = JSON.parse(fs.readFileSync(path_aux, 'utf8'));

    if (!json_config.hasOwnProperty('name')) {
      name_data = repository
    } else {
      name_data = json_config.name
    }
    
    if (!json_config.hasOwnProperty('description')) {
      description_data = " "
    } else {
      description_data = json_config.description
    }

    config_list.push({
      name       : name_data,
      description: description_data,
      link       : repository,
      src        : path.join(card_path, repository+'.svg').replace(/\\/g, '/')
    })
  });


  fs.writeFile(output_path, JSON.stringify(config_list, null, 2), 'utf8', (err) => {
    if (err) {
      console.error('Error writing config file:', err);
      return;
    }
    console.log('Config file updated successfully.');
  });
}


/*
*/
var main = () => {
  const url = 'https://api.github.com/users/harmonize-tools/repos';
  (async () => {
    // Clone the repositories
    const data = await executeUrl(url);
    // await cloneGithubRepositories(data)

    // Transform READMEs into htmls
    listAndExecutePythonCode()
    
    // Create the page.txt for each repository
    createPageRepositories()

    // Generate the main config file for the main page.tsx with all the repositories
    createMainPageRepositories()
  })();

}

main()
