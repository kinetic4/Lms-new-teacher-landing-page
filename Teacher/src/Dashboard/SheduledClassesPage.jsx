import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import { Card, Container, Row, Col, Modal } from 'react-bootstrap';

const SheduledClassesPage = () => {

    const [show, setShow] = useState(false);
    const [showEventModal, setShowEventModal] = useState(false);
    const [selectedEvent, setSelectedEvent] = useState(null);
    const [eventTitle, setEventTitle] = useState('');
    const [eventDate, setEventDate] = useState('');
    const [eventCategory, setEventCategory] = useState('');
    const [eventDescription, setEventDescription] = useState('');


    const [events, setEvents] = useState([
        { title: '5:30a Birthday Party', date: new Date('2021-08-01') },
        { title: '5:30a Birthday Party', date: new Date('2021-08-04') },
        { title: '5:30a Doctor Meeting', date: new Date('2021-08-06') },
        { title: '5:30a Meeting', date: new Date('2021-08-06') },
        { title: '6:30a Click for Google', date: new Date('2021-08-06') },
        { title: '7:30a Repeating Event', date: new Date('2021-08-06') },
        { title: '8:30a Birthday Party', date: new Date('2021-08-06') },
        { title: '5:30a Repeating Event', date: new Date('2021-08-16') },
        { title: '5:30a All Day Event', date: new Date('2021-08-07') },
        { title: '5:30a Repeating Event', date: new Date('2021-08-14') }
    ]);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleAddEvent = () => {
        // Add your event creation logic here, e.g., fetching values from form fields
        const newEvent = {
            title: eventTitle,
            date: new Date(eventDate),
            category: eventCategory,
            description: eventDescription, // Sample date, replace with actual date value

            // spread the date object to preserve its properties
            ...new Date(eventDate)
        };


        // Update events state with the new event
        setEvents([...events, newEvent]);

        // Reset form values 
        setEventTitle('');
        setEventDate('');
        setEventCategory('');
        setEventDescription('');

        // Close the modal
        handleClose();
    };



    return (
        <>
            <Container fluid style={{ marginTop: '5rem' }}>
                <Row>
                    <Col lg="12">
                        <div className="d-flex flex-wrap align-items-center justify-content-between my-schedule mb-4">
                            <div className="d-flex align-items-center justify-content-between">
                                <h4>Set Your weekly hours</h4>
                            </div>
                            <div className="create-workform">
                                <button type="button" onClick={handleShow} className="btn btn-primary position-relative d-flex align-items-center justify-content-between" data-toggle="modal" data-target="#exampleModal">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="mr-2" width="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                    </svg>
                                    Add New Event
                                </button>
                            </div>
                        </div>
                        <Row>
                            <Col lg="12">
                                <Card className="card-block card-stretch">
                                    <Card.Body>
                                        <FullCalendar
                                            plugins={[dayGridPlugin]}
                                            initialView="dayGridMonth"
                                            events={events}
                                            eventClick={(eventInfo) => {
                                                setSelectedEvent(eventInfo.event.extendedProps)
                                                setShowEventModal(true)
                                            }}      // Pass events data to the FullCalendar component
                                        />
                                        <Modal show={showEventModal} onHide={() => setShowEventModal(false)}>
                                            <Modal.Header closeButton>
                                                <Modal.Title>{selectedEvent?.title || 'Event Details'}</Modal.Title>
                                            </Modal.Header>
                                            <Modal.Body>
                                                {selectedEvent ? (
                                                    <>
                                                        <p><strong>Date:</strong> {new Date(selectedEvent.date).toLocaleDateString()}</p>
                                                        <p><strong>Category:</strong> {selectedEvent.category}</p>
                                                        <p><strong>Description:</strong> {selectedEvent.description}</p>
                                                    </>
                                                ) : (
                                                    <p>No event selected.</p>
                                                )}
                                            </Modal.Body>
                                        </Modal>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
            <Modal show={show} onHide={handleClose} className="fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <Modal.Header closeButton>
                    <div className="d-flex justify-content-between align-items-center pb-3">
                        <h5 className="modal-title" id="exampleModalLabel">Add New Event</h5>
                    </div>
                </Modal.Header>
                <Modal.Body>
                    <Row>
                        <Col md="12" className="mb-3">
                            <label htmlFor="Text1" className="form-label font-weight-bold text-muted text-uppercase">Event Title</label>
                            <input
                                type="text"
                                className="form-control"
                                id="Text1"
                                placeholder="Enter Event Title"
                                value={eventTitle}
                                onChange={(e) => setEventTitle(e.target.value)}
                            />
                        </Col>
                        <Col md="12">
                            <label className="form-label font-weight-bold text-muted text-uppercase">Date & Time</label>
                        </Col>
                        <Col md="6" className="col-md-6 mb-3">
                            <div className="input-group">
                                <input
                                    type="date"
                                    className="form-control"
                                    id="eventDate"
                                    value={eventDate}
                                    onChange={(e) => setEventDate(e.target.value)}
                                />
                                <div className="input-group-append">

                                </div>
                            </div>
                        </Col>
                        <Col md="6" className="mb-3">
                            <div className="input-group">
                                {/* <Datepickers names="range-end" placeholder="End Date" className="vanila-datepicker"  /> */}
                                <div className="input-group-append">

                                </div>
                            </div>
                        </Col>
                        <Col md="12" className="mb-3">
                            <div className="form-check form-check-inline">
                                <div className="custom-control custom-checkbox custom-control-inline">
                                    <input type="checkbox" className="custom-control-input m-0" id="inlineCheckbox1" />
                                    <label className="custom-control-label" htmlFor="inlineCheckbox1">All Day</label>
                                </div>
                            </div>
                            <div className="form-check form-check-inline">
                                <div className="custom-control custom-checkbox custom-control-inline">
                                    <input type="checkbox" className="custom-control-input m-0" id="inlineCheckbox2" defaultChecked />
                                    <label className="custom-control-label" htmlFor="inlineCheckbox2">Does not repeat</label>
                                </div>
                            </div>
                        </Col>
                        <Col md="12" className="mb-3">
                            <label htmlFor="inputState" className="form-label font-weight-bold text-muted text-uppercase">Category</label>
                            <select id="inputState" className="form-select form-control choicesjs" value={eventCategory} onChange={(e) => setEventCategory(e.target.value)}>
                                <option defaultValue="">Select Category</option>
                                <option>
                                    Appointments
                                </option>
                                <option>Birthday</option>
                                <option>Meetings</option>
                                <option>Tour</option>
                                <option>Anniversary</option>
                            </select>
                        </Col>
                        <Col md="12" className="mb-3">
                            <label htmlFor="Text9" className="form-label font-weight-bold text-muted text-uppercase">Description</label>
                            <textarea className="form-control" id="Text9" rows="2" placeholder="Enter Description" value={eventDescription} onChange={(e) => setEventDescription(e.target.value)}></textarea>
                        </Col>
                    </Row>

                    <div className="d-flex justify-content-end">
                        <button type="button" className="btn btn-primary" onClick={handleAddEvent}>Add Event</button>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
};

export default SheduledClassesPage;
