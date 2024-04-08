type BasicProfileCardProps = {
  type: "basic";
  name: string;
};

type AdvancedProfileCardProps = {
  type: "advanced";
  name: string;
  email: string;
};

type ProfileCardProps = BasicProfileCardProps | AdvancedProfileCardProps;

function Component(props: ProfileCardProps) {
  const { type, name } = props;

  const alertType = type === "basic" ? "success" : "danger";
  const className = `alert alert-${alertType}`;

  if (type === "basic") {
    return (
      <article className={className}>
        <h2>user : {name}</h2>
      </article>
    );
  }

  const { email } = props;

  return (
    <article className={className}>
      <h2>user : {name}</h2>
      <h2>email: {email} </h2>
    </article>
  );
}
export default Component;
