import {
  // Badge,
  // DropdownMenu,
  // DropdownItem,
  // UncontrolledDropdown,
  // DropdownToggle,
  // Media,
  // Progress,
  // Table,
  // UncontrolledTooltip,
  // InputGroupText,
  // InputGroupAddon,
  // InputGroup,
  // Pagination,
  // PaginationItem,
  // PaginationLink,
  FormFeedback,
  FormText,
  Label,
  Card,
  CardHeader,
  CardFooter,
  Container,
  Row,
  Col,
  CardBody,
  Form,
  FormGroup,
  Input,
  Button,
  Progress
} from "reactstrap";
// core components
import Header from "components/Headers/Header.js";

const Tables = () => {
  return (
    <>
      <Header />
      
      {/* Page content */}
      <Container className="mt--7" fluid>
        {/* Welcome text */}
        <Container>
              <div className="header-body text-center mb-0">
                <Row className="justify-content-center">
                  <Col lg="7" md="6">
                    <h1 className="text-white">¡Haz tu propio documento!</h1>
                    <p className="text-white">
                      Para que quede a la medida de lo que necesitas, responde el siguiente formulario.
                    </p>
                  </Col>
                </Row>
              </div>
        </Container>
        {/* Table */}
        <Row>
          <div className="col">
            <Card className="shadow">
              <CardHeader className="border-0">
                <h4 className="mb-0">Alquiler natural</h4>
              </CardHeader>
              <div className="col">
                <Progress
                  className="my-2"
                  value="25"
                >
                  25%
                </Progress>
              </div>
              <CardBody className="row">
              <div className="col">
                <Form className="">
                  <FormGroup className="mb- mb-xl-12">
                    <Label for="exampleEmail">
                      Nombre
                    </Label>
                    <Input />
                    <FormFeedback>
                      You will not be able to see this
                    </FormFeedback>
                    <FormText>
                      Example help text that remains unchanged.
                    </FormText>
                  </FormGroup>
                  <FormGroup className="mb-5 mb-xl-12">
                    <Label for="exampleEmail">
                      Nombre
                    </Label>
                    <Input />
                    <FormFeedback>
                      You will not be able to see this
                    </FormFeedback>
                    <FormText>
                      Example help text that remains unchanged.
                    </FormText>
                  </FormGroup>
                </Form>
              </div>
              <div className="col">
              <Form className="">
                  <FormGroup className="mb- mb-xl-12">
                    <Label for="exampleEmail">
                      Nombre
                    </Label>
                    <Input />
                    <FormFeedback>
                      You will not be able to see this
                    </FormFeedback>
                    <FormText>
                      Example help text that remains unchanged.
                    </FormText>
                  </FormGroup>
                  <FormGroup className="mb-5 mb-xl-12">
                    <Label for="exampleEmail">
                      Nombre
                    </Label>
                    <Input />
                    <FormFeedback>
                      You will not be able to see this
                    </FormFeedback>
                    <FormText>
                      Example help text that remains unchanged.
                    </FormText>
                  </FormGroup>
                </Form>
              </div>
              </CardBody>
              <CardFooter className="py-4, text-right">
                <nav aria-label="...">
                  {/* <Pagination
                    className="pagination justify-content-end mb-0"
                    listClassName="justify-content-end mb-0"
                  >
                    <PaginationItem className="disabled">
                      <PaginationLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                        tabIndex="-1"
                      >
                        <i className="fas fa-angle-left" />
                        <span className="sr-only">Previous</span>
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem className="active">
                      <PaginationLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        1
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        2 <span className="sr-only">(current)</span>
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        3
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        <i className="fas fa-angle-right" />
                        <span className="sr-only">Next</span>
                      </PaginationLink>
                    </PaginationItem>
                  </Pagination> */}
                  <Button className="my-2" color="primary" type="button">
                  Siguiente
                </Button>
                </nav>
              </CardFooter>
            </Card>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default Tables;
