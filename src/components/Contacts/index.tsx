import ContactIcon from "@/components/Contacts/ContactIcon";
import { Entry } from "contentful";
import { TContact } from "@/types/contentful.type";

interface IContacts {
  contacts: Entry<TContact>[];
}

const Contacts = ({ contacts }: IContacts) => (
  <section>
    {contacts.map((contact) => {
      const {
        fields: {
          title,
          link,
          icon: {
            fields: {
              file: { url },
            },
          },
        },
      } = contact;
      return (
        <ContactIcon
          key={title}
          path={url}
          alt={title}
          title={title}
          link={link}
        />
      );
    })}
  </section>
);

export default Contacts;
