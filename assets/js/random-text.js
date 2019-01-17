var max1 = 60;
var max2 = 75;
var max3 = 44;

index1 = Math.round(Math.random() * max1);
index2 = Math.round(Math.random() * max2);
index3 = Math.round(Math.random() * max3);

array1 = new Array("Implement", "Utilize", "Integrate", "Streamline", "Optimize", "Evolve", "Transform", "Embrace",
"Enable", "Orchestrate", "Leverage", "Reinvent", "Aggregate", "Architect", "Enhance", "Incentivize", "Empower",
"Imagine", "Monetize", "Harness", "Facilitate", "Seize", "Disintermediate", "Synergize", "Strategize", "Deploy",
"Drand", "Grow", "Target", "Syndicate", "Synthesize", "Deliver", "Mesh", "Incubate", "Engage", "Maximize", "Benchmark",
"Expedite", "Reintermediate", "Whiteboard", "Visualize", "Repurpose", "Scale", "Unleash", "Drive", "Extend",
"Engineer", "Revolutionize", "Generate", "Exploit", "Transition", "Iterate", "Cultivate", "Matrix",
"Productize", "Redefine", "Recontextualize", "Design", "Invest");

array2 = new Array("Bricks-and-mortar", "Value-added", "Vertical", "Proactive", "Robust", "Revolutionary", "Scalable",
"Leading-edge", "Innovative", "Intuitive", "Strategic", "E-business", "Mission-critical", "Sticky", "One-to-one",
"24/7", "End-to-end", "Global", "B2B", "B2C", "Granular", "Frictionless", "Virtual", "Viral", "Dynamic", "24/365",
"Killer", "Magnetic", "Bleeding-edge", "Web-enabled", "Interactive", "Sexy", "Back-end",
"Real-time", "Efficient", "Front-end", "Distributed", "Seamless", "Extensible", "Turn-key", "World-class",
"Open-source", "Cross-platform", "Cross-media", "Synergistic", "Out-of-the-box", "Enterprise",
"Integrated", "Impactful", "Wireless", "Transparent", "New-media", "Cutting-edge", "User-centric", "Visionary",
"Customized", "Ubiquitous", "Plug-and-play", "Collaborative", "Compelling", "Holistic", "Rich", "Omni-channel", "360º", "Best-in-class",
"Online", "Siloed", "Facebook", "Twitter", "Snapchat", "Reddit", "Kickstarter", "Artificial Intelligence", "Natrual Language Processing", "Machine Learning");

array3 = new Array("Synergies", "Web-readiness", "Paradigms", "Markets", "Partnerships", "Infrastructures", "Platforms",
"Initiatives", "Channels", "Eyeballs", "Communities", "ROI", "Solutions", "Action-items",
"Portals", "Niches", "Technologies", "Content", "Supply-chains", "Convergence", "Relationships",
"Architectures", "Interfaces", "E-commerce", "Systems", "Bandwidth", "Models",
"Mindshare", "Deliverables", "Users", "Schemas", "Networks", "Apps", "Metrics", "Functionalities",
"Experiences", "Web services", "Methodologies", "Virtual Reality", "Augmented Reality", "iBeacons", "Game engines", "Infrastructures", "Bots");


function getResult()
{
  index1 = Math.round(Math.random() * max1);
  index2 = Math.round(Math.random() * max2);
  index3 = Math.round(Math.random() * max3);

  // document.salad.txtTest.value = array1[index1] + " " + array2[index2] + " " + array3[index3];
  document.getElementById("title01").innerHTML = array1[index1] + " " + array2[index2] + " " + array3[index3];;
}
