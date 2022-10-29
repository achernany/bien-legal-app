import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Col
} from "reactstrap";

const Login = () => {
  return (
    <>
      <Col lg="5 " md="5">
        <Card className="bg-secondary shadow border-0">
          <CardHeader className="bg-transparent pb-3">
            <div className="text-muted text-center mt-2">
              <small>Inicia sesión</small>
            </div>
          </CardHeader>
          <CardBody className="px-lg-5 py-lg-5">
            <Form role="form">
              <FormGroup className="mb-3">
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-email-83" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Correo electrónico"
                    type="email"
                    autoComplete="new-email"
                  />
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-lock-circle-open" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Contraseña"
                    type="password"
                    autoComplete="new-password"
                  />
                </InputGroup>
              </FormGroup>
              <div className="custom-control custom-control-alternative custom-checkbox">
                <input
                  className="custom-control-input"
                  id=" customCheckLogin"
                  type="checkbox"
                />
                <label
                  className="custom-control-label"
                  htmlFor=" customCheckLogin"
                >
                  <span className="text-muted">Recordar mi usuario</span>
                </label>
              </div>
              <div className="text-center">
                <Button className="my-2" color="primary" type="button">
                  Iniciar sesión
                </Button>
              </div>
            </Form>
          </CardBody>
        </Card>
        <Row className="mt-3">
          <Col xs="6">
            <a
              className="text-white"
              href="#pablo"
              onClick={(e) => e.preventDefault()}
            >
              <small>Olvidaste tu contraseña?</small>
            </a>
          </Col>
          <Col className="text-right" xs="6">
            <a
              className="text-white"
              href="#pablo"
              onClick={(e) => e.preventDefault()}
            >
              <small>Crear una cuenta</small>
            </a>
          </Col>
        </Row>
      </Col>
    </>
  );
};

export default Login;
