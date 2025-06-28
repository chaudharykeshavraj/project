import { Col, Row } from "react-router-dom"

export const Login = () => {
    return <>
        <Row className="vh-100 align-items-center justify-content-center">
            <Col lg="4" className="bg-white my-5 py-3 rounded-2 shadow-sm mx-auto">
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label htmlFor="email">Email</Form.Label>

                        <Form.Control
                            name="email"
                            id="email"
                            type="email"
                            placeholder="Enter email"
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label htmlFor="password">Password</Form.Label>

                        <Form.Control
                            name="password"
                            id="password"
                            type="password"
                            placeholder="password"
                        />
                    </Form.Group>
SN	Level	Program	Year/part	Exam Schedule	Status	
1	

                    <Form.Group>
                        <Button variant="dark" type="submit">
                        <i class="bi bi-box-arrow-in-right"></i>Log In</Button>
                    </Form.Group>

                </Form>
            </Col>
        </Row>
    </>
}