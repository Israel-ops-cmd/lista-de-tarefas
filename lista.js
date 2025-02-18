const tasks = [
    {descricao: 'Passear com o cachorro', prioridade: 1, status: 'concluída'},
    {descricao: 'Comprar ingredientes para o almoço', prioridade: 1, status: 'concluída'},
    {descricao: 'Fazer o almoço', prioridade: 1, status: 'pendente'},
    {descricao: 'Ir para a academia', prioridade: 2, status: 'pendente'},
    {descricao: 'Resolver exercício do curso', prioridade: 1, status: 'concluída'},
    {descricao: 'Ir para o futebol', prioridade: 3, status: 'pendente'}
]

//adicionar novas tarefas
tasks.push({descricao: "Treinar violão", prioridade: 2, status: 'pedente'})

//remover tarefas concluídas
const pendingTasks = tasks.filter((task) => {
    return task.status == "pendentes"
})

//marcar tarefas como concluídas
const doneTasks = tasks.map((task) => {
    return task.status = 'concluído'
})

//ordenar tarefas por prioridade
const sortedTasks = tasks.sort((prevTasks, currentTasks) => prevTasks.prioridade - currentTasks.prioridade)

//contar tarefas pendentes
const pendingTasksQtd = tasks.reduce((prev, next) => {
    if(next.status == 'pendente'){
        return prev + 1;
    }
    else{
        return prev
    }
}, 0)

//encontrar uma tarefa específica
const selectedTask = tasks.find((task) => {
    return task.descricao == 'Treinar violão'
})

