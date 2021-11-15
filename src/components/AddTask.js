import { useState } from 'react'

const AddTask = ({ onAdd }) => {
    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()

        if(!text){
            alert('Por favor añada texto')
            return
        }
    
        onAdd({ text, day, reminder })

        setText('')
        setDay('')
        setReminder(false)
    }

    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>Task</label>
                <input 
                    type='text' 
                    placeholder='Añade tarea' 
                    value={text} 
                    onChange={(e) => setText(e.target.value)} />
            </div>
            <div className='form-control'>
                <label>Dia y Hora</label>
                <input 
                    type='text' 
                    placeholder='Añade el dia y la hora' value={day} 
                    onChange={(e) => setDay(e.target.value)} />
            </div>    
            <div className='form-control form-control-check'>
                <label>Recordatorio</label>
                <input 
                    type='checkbox'
                    checked={reminder} 
                    value={reminder} 
                    onChange={(e) => setReminder(e.currentTarget.checked)}
                    />
            </div>

            <input type='submit' value='Guardar Tarea' className='btn btn-block' />
        </form>
    )
}

export default AddTask
