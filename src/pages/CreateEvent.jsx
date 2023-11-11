import {
    Form,
    redirect,
    useLoaderData
} from 'react-router-dom';
import {
    Heading,
    Center,
    Card,
    CardBody,
} from '@chakra-ui/react';
import { LabelText } from '../components/ui/CreateEventText';
import '../create-event.css'

export const action = async ({ request, params }) => {
    const formData = await request.formData();
    const event = {
        id: formData.get("undefined"),
        createdBy: Number(formData.get("createdBy")),
        title: formData.get("title"),
        description: formData.get("description"),
        image: formData.get("image"),
        categoryIds: formData.get("categoryIds").split(",").map(Number),
        location: formData.get("location"),
        startTime: formData.get("startTime"),
        endTime: formData.get("endTime"),
    };
   
    const response = await fetch("https://my-json-server.typicode.com/Sahdia577/events-json-server/events", {
        method: "POST",
        body: JSON.stringify({ ...event, eventId: params.eventId }),
        headers: { "Content-Type": "application/json" },
    });

    const data = await response.json();

    return redirect(`/event/${data.id}`);
};

export const loader = async () => {
    const users = await fetch("https://my-json-server.typicode.com/Sahdia577/events-json-server/users");
    const categories = await fetch("https://my-json-server.typicode.com/Sahdia577/events-json-server/categories");

    return {
        users: await users.json(),
        categories: await categories.json(),
    };
};

export const CreateEvent = () => {
    const { users, categories } = useLoaderData();

    return (
        <>
            <Heading
                fontSize={'30'}
                align="center"
                color="white"
                bg='#606688'
                mb={2}
                height={"20"}
            >
                New Event
            </Heading>
            <Center
                className="new-event"
                width="100%"
                height="100%"
                mt={-5}
                align="center"
            >
                <Card
                    borderRadius="xl"
                    border="5px double #43035c"
                    w={"3xl"}
                    h="100%"
                    bgColor="#AB8DBB"
                    my={2}
                >
                    <CardBody>
                        <Form method="post" id="new-event-form">
                            <label htmlFor="title">
                                <LabelText mt={10}>
                                    🏷 Title:
                                </LabelText>
                            </label>
                            <input
                                placeholder="Name of event"
                                aria-label="Name of event"
                                className="title"
                                id="title"
                                name="title"
                            />
                            <label htmlFor="description">
                                <LabelText >
                                    ✨Description: 
                                </LabelText>
                            </label>
                            <textarea
                                maxLength={30}
                                placeholder="Well, what are we going to do?"
                                aria-label="Describe event"
                                className="description"
                                id="description"
                                name="description"
                            />
                            <label htmlFor="category" >
                                <LabelText >
                                🗂  Category
                                </LabelText>
                            </label>
                            <select 
                                id="category"
                                aria-label="Describe category"
                                className="category"
                                name="categoryIds"
                            >
                                {categories.map((category) => (
                                    <option value={category.id} key={category.id}>
                                        {category.name}
                                    </option>
                                ))}
                            </select>
                            <label htmlFor="image">
                                <LabelText>
                                    📷 Upload image ⇡
                                </LabelText>
                            </label>
                            <input
                                placeholder="Enter URL"
                                aria-label="URL"
                                className="url"
                                name="image"
                                id="image"
                            />
                            <label htmlFor="start-time">
                                <LabelText >
                                    📅 🕖Start date and time
                                </LabelText>
                            </label>
                            <input
                                type="datetime-local"
                                id="start-time"
                                className="when"
                                name="startTime"
                            />
                            <label htmlFor="end-time">
                                <LabelText>
                                    📅 🕒 End date and time
                                </LabelText>
                            </label>
                            <input
                                type="datetime-local" 
                                id="end-time"
                                className="when"
                                name="endTime"
                            />
                            <label htmlFor="location">
                                <LabelText>
                                    🌍 Location:
                                </LabelText>
                            </label>
                            <input
                                placeholder="Where?"
                                aria-label="Location"
                                className="location"
                                id="location"
                                name="location"
                            />
                            <label htmlFor="user">
                                <LabelText>
                                👤 User
                                </LabelText>
                            </label>
                            <select
                                id="user"
                                className="userId"
                                name="createdBy"
                            >
                                {users.map((user) => (
                                    <option value={user.id} key={user.id}>{user.name}</option>
                                ))}
                            </select>
                            <label htmlFor="submit-button">
                                <LabelText>
                                    👌Done
                                </LabelText>
                            </label>
                            <button
                                className="button"
                                type="submit"
                                id="submit-button"
                            >
                                Submit
                            </button>
                        </Form>
                    </CardBody>
                </Card>
            </Center>
        </>
    )
};
    