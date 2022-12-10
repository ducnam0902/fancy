import { MdLocationPin, MdPhoneInTalk, MdPublic } from "react-icons/md";

const contactDetails = [
  {
    topTitle: "Store Address goes here",
    bottomTitle: "Demo store address",
    icon: <MdLocationPin fontSize={"20px"} />,
  },
  {
    topTitle: "Phone: (012) 345- 67890",
    bottomTitle: "Fax: (012) 345- 67890",
    icon: <MdPhoneInTalk fontSize={"20px"} />,
  },
  {
    topTitle: "Email: info@example.com",
    bottomTitle: "Website: your site url",
    icon: <MdPublic fontSize={"20px"} />,
  },
];

export default contactDetails;
