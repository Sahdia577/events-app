import {
    Text,
    useToast,
    Button,
} from '@chakra-ui/react';
import { Form, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './modal-form.css'

export const ModalForm = ({ categories, event }) => {
    const toast = useToast()
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        categoryIds: [],
        image: "",
        startTime: "",
        endTime: "",
        location: "",
    });
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`https://my-json-server.typicode.com/Sahdia577/events-json-server/events/${event.id}`);
            const newFormData = await response.json();
            setFormData(newFormData);
        };
        fetchData();
    }, [event.id]);

    const editEvent = async () => {
        try {
            const response = await fetch(`https://my-json-server.typicode.com/Sahdia577/events-json-server/events/${event.id}`, {
                method: "PATCH",
                body: JSON.stringify(formData),
                headers: { "Content-Type": "application/json" }
            });
            if (response.ok) {
                toast({
                    title: "Event edited",
                    description: "Your changes have been saved.",
                    status: "success",
                    isClosable: true,
                });
                navigate(`/event/${event.id}`);
            } else {
                toast({
                    title: "Something went wrong",
                    description: "Your changes were not saved. Please try again.",
                    status: "error",
                    isClosable: true,
                });
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <>
            <Form
                method="PATCH"
                id="edit-event-form"
                onSubmit={editEvent}
            >
                <label htmlFor="title">
                    <Text>  
                        Title:
                    </Text>
                </label>
                <input
                    placeholder="Title"
                    aria-label="Name of event"
                    id="mtitle"
                    name="title"
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                />
                <label htmlFor="description">
                    <Text>
                        Description:
                    </Text>
                </label>
                <textarea                    
                    maxLength={30}
                    placeholder="Description"
                    aria-label="Describe event"
                    id="mdescription"
                    name="description"
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                />
                <label htmlFor="category" >
                    <Text >
                        Category
                    </Text>
                </label>
                <select 
                    id="mcategory"
                    aria-label="Describe category"
                    name="categoryIds"
                    onChange={(e) => setFormData({ ...setFormData, categoryIds: [e.target.value] })}
                >
                    {categories.map((category) => (
                        <option value={category.id} key={category.id}>
                            {category.name}
                        </option>
                    ))}
                </select>
                <label htmlFor="image">
                    <Text>
                        Image:
                    </Text>
                </label>
                <input
                    placeholder="Enter URL"
                    aria-label="URL"
                    name="image"
                    id="mimage"
                    onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                />
                <label htmlFor="start-time">
                    <Text >
                        Start date and time:
                    </Text>
                </label>
                <input
                    type="datetime-local"
                    id="mstart-time"
                    name="startTime"
                    onChange={(e) => setFormData({ ...formData, startTime: e.target.value })}
                />
                <label htmlFor="end-time">
                    <Text>
                        End date and time:
                    </Text>
                </label>
                <input
                    type="datetime-local" 
                    id="mend-time"
                    name="endTime"
                    onChange={(e) => setFormData({ ...formData, endTime: e.target.value })}
                />
                <label htmlFor="location">
                    <Text>
                        Location:
                    </Text>
                </label>
                <input 
                    placeholder="Location"
                    aria-label="Location"
                    id="mlocation"
                    name="location"
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                />
                <Button 
                    mt="1rem"
                    mb="-6rem"
                    ml="-12rem"
                    fontSize={15}
                     h="36px"
                    bg="#43035c"
                    color="#FFF"
                    type="submit"
                    id="submit-button"
                >
                    Save Changes
                </Button>
            </Form>
        </>
    );
};