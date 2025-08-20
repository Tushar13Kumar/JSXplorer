import "./styles.css";

const MyComponent = () => {
  return <h1>Hello JSX!</h1>;
};
const name = "Tushar";
const Greeting = () => {
  return <p>Hello, {name}!</p>;
};

const LinkTag = () => {
  const url = "https.//Example.com";
  return <a href="{url">Visit Example website</a>;
};
const ImageTag = () => {
  const imgurl = "https://placehold.co/200x200";
  return (
    <div>
      <img src={imgurl} alt="placeholder" />
    </div>
  );
};
const ProfileDetails = () => {
  const details = {
    name: "Tushar",
    age: 23,
    email: "tusharKumar74761@gmail.com",
    bio: "A passionate software developer",
  };
  return (
    <div>
      <p>Name: {details.name}</p>
      <p>Age: {details.age}</p>
      <p>Email: {details.email}</p>
      <p>Bio: {details.bio}</p>
    </div>
  );
};
export default function App() {
  return (
    <div>
      <MyComponent />
      <Greeting />
      <LinkTag />
      <ImageTag />
      <ProfileDetails />
    </div>
  );
}
