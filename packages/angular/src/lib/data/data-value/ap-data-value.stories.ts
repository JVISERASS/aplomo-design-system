import type { Meta, StoryObj } from "@storybook/angular";
import { ApDataValue } from "./ap-data-value";

const meta: Meta<ApDataValue> = {
  title: "Data/DataValue",
  component: ApDataValue,
};
export default meta;

type Story = StoryObj<ApDataValue>;

export const Default: Story = {
  args: {
    value: "99,982",
  },
};

export const Loading: Story = {
  args: {
    value: "128,402",
    loading: true,
    placeholder: "---",
  },
};

export const Muted: Story = {
  args: {
    value: "SVC-4820-DE",
    // El original React acepta `size: number` y lo vuelca en `fontSize` (px implicito). El input
    // Angular es `string` puro (CSS length), asi que el 13 numerico se expresa como "13px".
    size: "13px",
    tone: "muted",
  },
};

export const WithStatus: Story = {
  args: {
    value: "45ms",
    tone: "ok",
    weight: 500,
  },
};
