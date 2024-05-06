import os, sys, json
import shutil
from docutils.core import publish_file

def ipynbToHtml(input_file, output_file):
    # Command 
    command = f'jupyter nbconvert --to html {input_file}'
    os.system(command)

def mdToHtml(input_file, output_file):
    command = f'ghmd {input_file} --embed-css --light'
    os.system(command)
def rstToHtml(input_file, output_file):

    settings_overrides={
        'field_name_limit': 40,
        }
    
    settings_overrides['stylesheet_path'] = os.path.join(os.path.dirname(input_file),'stylesheet.css')
    
    publish_file(source_path=input_file,
                 destination_path=output_file,
                 settings_overrides=settings_overrides,
                 writer_name='html')

def main(input_file):
   
    try:
        aux_file = f'{os.path.splitext(input_file)[0]}.html'

        ext      = os.path.splitext(input_file)[1].split('.')[-1]
        # Modify the output folder
        out_file = os.path.join(os.path.dirname(input_file), os.path.basename(aux_file))
        
        if ext == 'rst':
            rstToHtml(input_file, aux_file)
        elif ext == 'md':
            mdToHtml(input_file, aux_file)
        elif ext == 'ipynb':
            ipynbToHtml(input_file, aux_file)

        # Create the final directory if not exists
        if os.path.isdir(os.path.dirname(out_file)) == False:
            os.makedirs(os.path.dirname(out_file))

        # Generate the config file if not exits
        if os.path.isfile(os.path.join(os.path.dirname(out_file), 'config.json')) == False:
            with open(os.path.join(os.path.dirname(out_file), 'config.json'), 'w') as file:
                json.dump({}, file)

        shutil.move(aux_file, out_file)

        print(out_file)
    except Exception as e:
        print('Error ->',e)
        

#######################################
######### TO EXECUTE THE CODE #########
#######################################

if __name__ == '__main__':
    if len(sys.argv) == 2:
        input_file  = sys.argv[1]
        main(input_file)    
    else:
        print('The number of parameters is incorrect, has to be one')
