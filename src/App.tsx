import { ColoredDotIcon, IStylesColorProps } from "./components/DotIcon/styles";
import {
  Centralize,
  Table,
  TableContainer,
  TBody,
  Td,
  Th,
  THead,
  Tr,
} from "./components/Table/styles";
import { WrappedImage } from "./components/WrappedImage";

type EventData = {
  eventId: number;
  image: string;
  name: string;
  startDateUtc: string;
  createdDate: string;
  isPublic: boolean;
  status: {
    value: number;
    description: string;
  };
  statusColor: IStylesColorProps["$color"];
};

function App() {
  const events: EventData[] = [
    {
      eventId: 1,
      image: "",
      name: "Evento de tecnologia",
      startDateUtc: "2024-07-27T11:00:00Z",
      createdDate: "2024-07-27T11:00:00Z",
      isPublic: false,
      status: {
        value: 1,
        description: "Aprovado",
      },
      statusColor: "light-green",
    },
    {
      eventId: 2,
      image: "",
      name: "Evento de tecnologia",
      startDateUtc: "2024-07-27T11:00:00Z",
      createdDate: "2024-07-27T11:00:00Z",
      isPublic: false,
      status: {
        value: 2,
        description: "Pendente",
      },
      statusColor: "red",
    },
    {
      eventId: 3,
      image: "",
      name: "Evento WWDC24",
      startDateUtc: "2024-07-27T11:00:00Z",
      createdDate: "2024-07-27T11:00:00Z",
      isPublic: false,
      status: {
        value: 1,
        description: "Aprovado",
      },
      statusColor: "light-green",
    },
    {
      eventId: 4,
      image: "",
      name: "Evento Google I/O 2024",
      startDateUtc: "2024-07-27T11:00:00Z",
      createdDate: "2024-07-27T11:00:00Z",
      isPublic: false,
      status: {
        value: 3,
        description: "Cancelado",
      },
      statusColor: "orange",
    },
    {
      eventId: 5,
      image: "",
      name: "Evento Microsoft",
      startDateUtc: "2024-07-27T11:00:00Z",
      createdDate: "2024-07-27T11:00:00Z",
      isPublic: false,
      status: {
        value: 3,
        description: "Cancelado",
      },
      statusColor: "orange",
    },
  ];

  return (
    <div
      style={{
        minHeight: "100dvh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <TableContainer>
        <Table>
          <THead>
            <Tr $isTHead>
              <Th>Event</Th>
              <Th>Event Date</Th>
              <Th>Created At</Th>
              <Th>Privacy</Th>
              <Th>Status</Th>
            </Tr>
          </THead>
          <TBody>
            {events.map((event, i) => (
              <Tr
                key={event.eventId}
                $color={i % 2 === 0 ? "primary" : "secondary"}
              >
                <Td>
                  <Centralize>
                    <WrappedImage $size="semi-small" $rounded="full">
                      <WrappedImage.Image src={event.image} alt="Event image" />
                    </WrappedImage>
                    {event.name}
                  </Centralize>
                </Td>
                <Td>{new Date(event.startDateUtc).toLocaleString()}</Td>
                <Td>{new Date(event.createdDate).toLocaleString()}</Td>
                <Td>{event.isPublic ? "Public" : "Private"}</Td>
                <Td>
                  <Centralize>
                    <ColoredDotIcon $color={event.statusColor} />
                    {event.status.description}
                  </Centralize>
                </Td>
              </Tr>
            ))}
          </TBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default App;
