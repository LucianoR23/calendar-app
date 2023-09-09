import { useCalendarStore } from "../../hooks"


export const FabDelete = () => {

    const { startDeletingEvent, hasEventSelected } = useCalendarStore()

    const handleDeleteEvent = () => {
        startDeletingEvent()
    }

    return (
        <button className="btn btn-danger fab-danger" style={{ display: hasEventSelected ? '' : 'none'  }} onClick={ handleDeleteEvent }>
            <i className="fas fa-trash-alt"></i>
        </button>
    )
}
