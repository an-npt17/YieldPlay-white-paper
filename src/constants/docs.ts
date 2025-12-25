import { DocsData } from "@/types/docs";

export const DOCS_CONTENT: DocsData = {
  abstract: {
    id: "abstract",
    title: "Abstract",
    subtitle: "A High-Level Overview of the Protocol",
    content: [
      "The Horizon Protocol introduces a novel consensus mechanism designed for hyper-scalable decentralized networks. By leveraging asynchronous Byzantine Fault Tolerance (aBFT), we achieve sub-second finality.",
      "This document outlines the mathematical foundations and the economic incentives that ensure long-term sustainability and security of the network.",
    ],
  },
  architecture: {
    id: "architecture",
    title: "Architecture",
    subtitle: "The Layered Infrastructure",
    content: [
      "The network is divided into three distinct layers: the Settlement Layer, the Execution Layer, and the Data Availability Layer.",
      "Each node in the Horizon ecosystem performs specialized tasks, allowing for parallel processing of transactions without compromising the global state consistency.",
    ],
  },
  tokenomics: {
    id: "tokenomics",
    title: "Tokenomics",
    subtitle: "Incentivizing the Ecosystem",
    content: [
      "The $HRZ token is designed with a deflationary pressure mechanism. 15% of all transaction fees are permanently removed from circulation.",
      "Staking rewards are dynamically adjusted based on the total value locked (TVL) to maintain a healthy inflation-to-security ratio.",
    ],
  },
};
