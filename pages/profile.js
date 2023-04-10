import { ChatIcon, EmailIcon, StarIcon } from "@chakra-ui/icons";
import {
  List,
  ListIcon,
  ListItem,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";

export default function Profile() {
  return (
    <Tabs variant="enclosed" colorScheme="white" size="md">
      <TabList>
        <Tab _selected={{ bg: "purple.400", color: "white" }}>One</Tab>
        <Tab _selected={{ bg: "purple.400", color: "white" }}>Two</Tab>
        <Tab _selected={{ bg: "purple.400", color: "white" }}>Three</Tab>
      </TabList>

      <TabPanels>
        <TabPanel>
          <List spacing={4}>
            <ListItem>
              <ListIcon as={EmailIcon} />
              Email: mario@nentninja.dev
            </ListItem>
            <ListItem>
              <ListIcon as={ChatIcon} />
              Lorem game
            </ListItem>
            <ListItem>
              <ListIcon as={StarIcon} />
              Lorem game
            </ListItem>
          </List>
        </TabPanel>
        <TabPanel>
          <p>Inject it twice</p>
        </TabPanel>
        <TabPanel>
          <p>Inject it thrice</p>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}
