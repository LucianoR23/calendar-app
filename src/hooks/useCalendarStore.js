import { useSelector } from "react-redux"
import { useDispatch } from 'react-redux'
import { onAddNewEvent, onDeleteEvent, onLoadEvents, onSetActiveEvent, onUpdateEvent } from "../store"
import calendarApi from "../api/calendarApi"
import { convertDateEvents } from "../helpers"
import Swal from "sweetalert2"


export const useCalendarStore = () => {
    const dispatch = useDispatch()

    const { events, activeEvent } = useSelector( state => state.calendar )
    const { user } = useSelector( state => state.auth )

    const setActiveEvent = ( calendarEvent ) => {
        dispatch( onSetActiveEvent( calendarEvent) )
    }

    const startSavingEvent = async( calendarEvent ) => {
        //TODO llegar al backend

        try {

            if( calendarEvent.id ) {
                await calendarApi.put(`/events/${ calendarEvent.id }`, calendarEvent)
                dispatch( onUpdateEvent({ ...calendarEvent, user }) )
                return
            }
    
            const { data } = await calendarApi.post('/events', calendarEvent)
            dispatch( onAddNewEvent({ ...calendarEvent, id: data.event.id, user } ) )
            
        } catch (error) {
            console.log(error)
            Swal.fire( 'Error saving event', error.response.data.msg, 'error' )
        }
        //Todo bien

    }

    const startDeletingEvent = async() => {

        try {
            await calendarApi.delete(`/events/${ activeEvent.id }`)
            dispatch( onDeleteEvent() )
            Swal.fire( 'Event deleted', activeEvent.title, 'success' )
            
        } catch (error) {
            console.log(error)
            Swal.fire( 'Error deleting event', error.response.data.msg, 'error' )
        }

    }
    
    const startLoadingEvents = async() => {
        try {
            const { data } = await calendarApi.get('/events')
            const events = convertDateEvents( data.events )
            dispatch( onLoadEvents( events ) )

        } catch (error) {
            console.log('Error cargando eventos')
            console.log(error)
        }
    }



    return {
        events,
        activeEvent,
        hasEventSelected: !!activeEvent,
        setActiveEvent,
        startSavingEvent,
        startDeletingEvent,
        startLoadingEvents
    }
}
