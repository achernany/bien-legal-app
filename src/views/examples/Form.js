import {
  // Button,
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
  Col,
  Container,
  Chart,
} from "reactstrap";
import {
  chartOptions,
  parseOptions,
  // chartExample1,
  // chartExample2
} from "variables/charts.js";

import Header from "components/Headers/Header.js";
import CollapseOption from "components/Collapse/CollapseOptions";


if (window.Chart) {
  parseOptions(Chart, chartOptions());
}


const Formulary = () => {
  return (
    <>
      <Header />
      {/* Page content */}
      <Container className="mt--7" fluid>
        <Row>
          <Col className="mb-5 mb-xl-12" xl="12">
            <Card className="bg-white shadow">
              <CardHeader className="bg-transparent">
                <Row className="align-items-center">
                  <div className="col">
                    <h3 className="text-inactive  mb-0">Buscador de documentos</h3>
                  </div>
                </Row>
              </CardHeader>
              <CardBody>
                <Form className="">
                  <FormGroup className="mb-0">
                    <InputGroup className="input-group-alternative">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="fas  fa-search" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input placeholder="Search" type="text" />
                    </InputGroup>
                  </FormGroup>
                </Form>
                <CollapseOption/>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Formulary;
