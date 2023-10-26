"use client";

interface Props {
  user: {
    id: string;
    objectId: string;
    username: string;
    name: string;
    bio: string;
    image: string;
  };
  btnTitle: String;
}

const AccountProfile = ({ user, btnTitle }: Props) => {
  return <div>Account Profile</div>;
};

export default AccountProfile;
