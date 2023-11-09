import { useNavigate } from 'react-router-dom';
import ProjectForm from '../project/ProjectForm'
import styles from './NewProject.module.css'
function NewProject () {

    const history = useNavigate()

    function createPost(project) {
        // iniciar cost e serviços
        project.cost = 0
        project.services = []

        fetch("https://json-serv.vercel.app/", {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(project),
        })
        .then((resp) => resp.json())
        .then((data) => {
            console.log(data)
            // redirecionar
            history('https://json-serv.vercel.app/', { state: { message: 'Projeto criado com sucesso!' }})
        })
        .catch((err) => console.log(err))
    }

    return (
        <div className={styles.newproject_container}>
            <h1>Criar projeto</h1>
            <p>Crie seu projeto para depois adicionar os serviços</p>
            <ProjectForm handleSubmit = {createPost} btnText= "Criar Projeto"/>
        </div>
    )
}
export default NewProject;
