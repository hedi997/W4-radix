import "./App.css";
import { Overview } from "./Overview.jsx";

import {
  Flex,
  Text,
  Button,
  Popover,
  Avatar,
  TextArea,
  Checkbox,
  Box,
  DropdownMenu,
  Card,
  Tabs,
  Table,
} from "@radix-ui/themes";

import { CaretDownIcon } from "@radix-ui/react-icons";

export default function App() {
  return (
    <>
      <Card className="bigCard">
        <div className="section">
          <h1 className="db">Dashboard</h1>
          <a class="btn" href="/docs">
            Download
          </a>
        </div>
        <div>
          <Tabs.Root className="tabs" defaultValue="account">
            <Tabs.List>
              <Tabs.Trigger value="account">Overview</Tabs.Trigger>
              <Tabs.Trigger value="documents">Analytics</Tabs.Trigger>
              <Tabs.Trigger value="settings">Reports</Tabs.Trigger>
              <Tabs.Trigger value="settings2">Notifications</Tabs.Trigger>
            </Tabs.List>
          </Tabs.Root>
        </div>
        <div className="cont">
          <div>
            <Card>
              <div className="card">
                <Flex gap="3" align="center">
                  <Box className="box">
                    <Text as="div" size="2" weight="bold" mb="2">
                      Total Revenue
                    </Text>
                    <Text as="div" size="6" weight="bold">
                      $45,231.89
                    </Text>
                    <Text as="div" size="1" color="gray">
                      +20.1% from last month
                    </Text>{" "}
                  </Box>
                </Flex>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="icon"
                  >
                    <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                  </svg>
                </div>
              </div>
            </Card>
          </div>
          <div>
            <Card>
              <div className="card">
                <Flex gap="3" align="center">
                  <Box className="box">
                    <Text as="div" size="2" weight="bold" mb="2">
                      Subscriptions
                    </Text>
                    <Text as="div" size="6" weight="bold">
                      +2350
                    </Text>

                    <Text as="div" size="1" color="gray">
                      +180.1% from last month
                    </Text>
                  </Box>
                </Flex>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="icon"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </div>
              </div>
            </Card>
          </div>
          <Card>
            <div className="card">
              <Flex gap="3" align="center">
                <Box className="box">
                  <Text as="div" size="2" weight="bold" mb="2">
                    Sales
                  </Text>
                  <Text as="div" size="6" weight="bold">
                    +12,234
                  </Text>

                  <Text as="div" size="1" color="gray">
                    +19% from last month
                  </Text>
                </Box>
              </Flex>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="icon"
                >
                  <rect width="20" height="14" x="2" y="5" rx="2" />
                  <path d="M2 10h20" />
                </svg>
              </div>
            </div>
          </Card>
          <Card>
            <div className="card">
              <Flex gap="3" align="center">
                <Box className="box">
                  <Text as="div" size="2" weight="bold" mb="2">
                    Active Now
                  </Text>
                  <Text as="div" size="6" weight="bold">
                    +573
                  </Text>

                  <Text as="div" size="1" color="gray">
                    +201 since last hour
                  </Text>
                </Box>
              </Flex>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="icon"
                >
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                </svg>
              </div>
            </div>
          </Card>
        </div>
        <div className="section2">
          <div>
            <Card className="over">
              <div className="o">Overview</div>
              <Overview />
            </Card>
          </div>
          <div>
            <Card className="tableCard">
              <div className="TitleAndDescriptionContainer">
                <div className="RecentSales">Recent Sales</div>
                <div className="SalesText">You made 265 sales this month.</div>
              </div>

              <Table.Root>
                <Table.Body className="TableBody">
                  <Table.Row className="TableRow">
                    <Table.RowHeaderCell className="RowHeaderCell">
                      <img
                        src="../../Bilder/01.png"
                        className="Avatars"
                        alt="Avatar"
                      ></img>
                    </Table.RowHeaderCell>
                    <Table.Cell>
                      <div className="Name">Olivia Martin</div>
                      <div className="Mail">olivia.martin@email.com</div>
                    </Table.Cell>
                    <Table.Cell className="price">+$1,999.00</Table.Cell>
                  </Table.Row>

                  <Table.Row>
                    <Table.RowHeaderCell>
                      <img
                        src="../../Bilder/02.png"
                        className="Avatars"
                        alt="Avatar"
                      ></img>
                    </Table.RowHeaderCell>
                    <Table.Cell>
                      <div className="Name">Jackson Lee</div>
                      <div className="Mail">jackson.lee@email.com</div>
                    </Table.Cell>
                    <Table.Cell className="price">+$39.00</Table.Cell>
                  </Table.Row>

                  <Table.Row className="TableRow">
                    <Table.RowHeaderCell className="RowHeaderCell">
                      <img
                        src="../../Bilder/03.png"
                        className="Avatars"
                        alt="Avatar"
                      ></img>
                    </Table.RowHeaderCell>
                    <Table.Cell>
                      <div className="Name">Isabella Nguyen</div>
                      <div className="Mail">isabella.nguyen@email.com</div>
                    </Table.Cell>
                    <Table.Cell className="price">+$1,999.00</Table.Cell>
                  </Table.Row>

                  <Table.Row>
                    <Table.RowHeaderCell>
                      <img
                        src="../../Bilder/04.png"
                        className="Avatars"
                        alt="Avatar"
                      ></img>
                    </Table.RowHeaderCell>
                    <Table.Cell>
                      <div className="Name">William Kim</div>
                      <div className="Mail">will@email.com</div>
                    </Table.Cell>
                    <Table.Cell className="price">+$39.00</Table.Cell>
                  </Table.Row>

                  <Table.Row>
                    <Table.RowHeaderCell>
                      <img
                        src="../../Bilder/05.png"
                        className="Avatars"
                        alt="Avatar"
                      ></img>
                    </Table.RowHeaderCell>
                    <Table.Cell>
                      <div className="Name">Sofia Davis</div>
                      <div className="Mail">sofia.davis@email.com</div>
                    </Table.Cell>
                    <Table.Cell className="price">+$39.00</Table.Cell>
                  </Table.Row>
                </Table.Body>
              </Table.Root>

              {/* <Table.Root>
                <Table.Body>
                  <Table.Row>
                    <Table.RowHeaderCell>Danilo Sousa</Table.RowHeaderCell>
                    <Table.Cell>danilo@example.com</Table.Cell>
                    <Table.Cell>Developer</Table.Cell>
                  </Table.Row>

                  <Table.Row>
                    <Table.RowHeaderCell>Zahra Ambessa</Table.RowHeaderCell>
                    <Table.Cell>zahra@example.com</Table.Cell>
                    <Table.Cell>Admin</Table.Cell>
                  </Table.Row>

                  <Table.Row>
                    <Table.RowHeaderCell>Jasper Eriksson</Table.RowHeaderCell>
                    <Table.Cell>jasper@example.com</Table.Cell>
                    <Table.Cell>Developer</Table.Cell>
                  </Table.Row>
                </Table.Body>
              </Table.Root> */}
            </Card>
          </div>
        </div>
      </Card>
    </>
  );
}
