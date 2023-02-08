import duotone from "icons/duotone";

export const navigations = [
  { type: "label", label: "Mentor" },

  {
    name: "Profiles",
    icon: duotone.UserProfile,
    children: [
      { name: "Profile", path: "/profile" },

    ],
  },

  {
    name: "Accounts",
    icon: duotone.Accounts,
    children: [
      { name: "Account", path: "/account" },
     ],
  },
];
