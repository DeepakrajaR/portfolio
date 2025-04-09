import ProjectCard from "@/components/project-card"
import type { Project } from "@/types"

// Project data
const projects: Project[] = [
  {
    id: 1,
    title: "SMS Spam Analysis & Text Preprocessing",
    description:
      "Developed an NLP system to classify SMS messages as spam or legitimate using advanced text preprocessing techniques. Implemented feature extraction methods like TF-IDF and applied various machine learning algorithms to achieve high classification accuracy.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["NLP", "Text Classification", "scikit-learn", "NLTK", "Data Visualization"],
    link: "https://github.com/DeepakrajaR/SMS-Spam-Analysis-Text-Preprocessing-and-Visualization",
  },
  {
    id: 2,
    title: "Harmful Brain Activity Classification",
    description:
      "Created a deep learning model to detect and classify harmful brain activity patterns from EEG data. Utilized signal processing techniques and convolutional neural networks to identify seizures and other abnormal brain activities with high precision and recall.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["Deep Learning", "Signal Processing", "TensorFlow", "Time Series Analysis", "Healthcare AI"],
    link: "https://github.com/DeepakrajaR/Harmful-Brain-Activity-Classification",
  },
  {
    id: 3,
    title: "Gait Classification",
    description:
      "Built a machine learning system to analyze and classify human gait patterns from sensor data. Implemented feature extraction from time-series motion data and developed classification models to identify abnormal walking patterns for medical diagnostics.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["Machine Learning", "Time Series", "Feature Engineering", "Biomedical Signal Processing"],
    link: "https://github.com/DeepakrajaR/Gait-Classification",
  },
  {
    id: 4,
    title: "Wind Energy Prediction",
    description:
      "Developed a predictive model for wind energy production using historical weather and turbine data. Applied ensemble learning techniques and time series forecasting to predict energy output, helping optimize renewable energy resource allocation and planning.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["Time Series Forecasting", "Regression", "XGBoost", "Feature Selection", "Renewable Energy"],
    link: "https://github.com/DeepakrajaR/Wind-Energy-Prediction",
  },
  {
    id: 5,
    title: "TMNIST Alphabet Character Recognition",
    description:
      "Created a computer vision system for recognizing handwritten alphabet characters using convolutional neural networks. Implemented data augmentation techniques and transfer learning to achieve high accuracy with limited training data.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["Computer Vision", "CNN", "PyTorch", "Transfer Learning", "Image Classification"],
    link: "https://github.com/DeepakrajaR/TMNIST-Alphabet-Character-Recognition",
  },
  {
    id: 6,
    title: "Causal Feature Engineering - California Housing",
    description:
      "Applied causal inference techniques to identify truly impactful features for housing price prediction. Used structural causal models and counterfactual analysis to improve model interpretability and generalization beyond traditional statistical correlations.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["Causal Inference", "Feature Engineering", "Regression", "Model Interpretability", "DoWhy"],
    link: "https://github.com/DeepakrajaR/causal-feature-engineering-california-housing",
  },
]

export default function ProjectsSection() {
  return (
    // Grid layout: 1 column on mobile, 2 columns on medium screens, 3 columns on large screens
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  )
}
