export function createTodos(){
    const todos =[];
    for(let i=0; i<50; i++){
        todos.push({
            id: i,
            text: 'Todo ' + (i+1),
            completed: Math.random() > 0.5
        })
    }
    return todos
}

export function filterTodo(todos, tab){
    console.log('[ARTIFICIALLY SLOW] Filtering ' + todos.length + ' todos for"'+ tab + '"tab.'  );

    const startTime = performance.now();
    while(performance.now() - startTime < 500){
        // Do nothing for 500 ms to emulate extremely slow code
    }
    
    return todos.filter(todo => {
        if (tab === 'All') {
            return true
        } else if(tab === 'Active') {
            return !todo.completed
        } else {
            return todo.completed
        }
    }
    )
}