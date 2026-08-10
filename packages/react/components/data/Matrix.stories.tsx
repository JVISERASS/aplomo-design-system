import type { Meta, StoryObj } from "@storybook/react";
import { Matrix } from "./Matrix";

const meta: Meta<typeof Matrix> = {
  title: "Data/Matrix",
  component: Matrix,
};
export default meta;

type Story = StoryObj<typeof Matrix>;

export const Default: Story = {
  args: {
    unit: "ms",
    rows: ["eu-central-1", "us-east-1", "ap-south-1"],
    columns: ["00", "06", "12", "18"],
    values: {
      "eu-central-1|00": 96,
      "eu-central-1|06": 128,
      "eu-central-1|12": 84,
      "eu-central-1|18": 112,
      "us-east-1|00": 156,
      "us-east-1|06": 142,
      "us-east-1|12": 168,
      "us-east-1|18": 184,
      "ap-south-1|00": 248,
      "ap-south-1|06": 264,
      "ap-south-1|12": 232,
      "ap-south-1|18": 256,
    },
    legend: true,
  },
};

export const Loading: Story = {
  args: {
    unit: "%",
    rows: ["region-a", "region-b"],
    columns: ["mon", "tue", "wed"],
    values: {},
    loading: true,
  },
};

export const WithoutLegend: Story = {
  args: {
    unit: "req/s",
    rows: ["svc-api", "svc-db"],
    columns: ["peak-1", "peak-2", "peak-3"],
    values: {
      "svc-api|peak-1": 4200,
      "svc-api|peak-2": 3800,
      "svc-api|peak-3": 4100,
      "svc-db|peak-1": 2100,
      "svc-db|peak-2": 1900,
      "svc-db|peak-3": 2200,
    },
    legend: false,
  },
};
