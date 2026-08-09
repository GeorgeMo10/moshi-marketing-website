/**
 * The trades we build marketing systems for. Used on the automations page and
 * anywhere we need to show a prospect "yes, we do your industry."
 */
export type Industry = {
  slug: string;
  name: string;
  /** Short line describing the kind of lead this trade is chasing. */
  note: string;
  image: string;
  imageAlt: string;
};

export const INDUSTRIES: Industry[] = [
  {
    slug: "roofing",
    name: "Roofing",
    note: "Storm calls and full replacements",
    image: "/industries/roofing.jpg",
    imageAlt: "Roofers installing asphalt shingles on a suburban house roof",
  },
  {
    slug: "hvac",
    name: "HVAC",
    note: "Emergency service and system installs",
    image: "/industries/hvac.jpg",
    imageAlt:
      "HVAC technician checking gauges on an outdoor air conditioning unit",
  },
  {
    slug: "plumbing",
    name: "Plumbing",
    note: "Same-day calls and repipes",
    image: "/industries/plumbing.jpg",
    imageAlt: "Plumber repairing a pipe fitting under a kitchen sink",
  },
  {
    slug: "electrical",
    name: "Electrical",
    note: "Panel upgrades and service work",
    image: "/industries/electrical.jpg",
    imageAlt: "Electrician wiring a recessed ceiling light on a step ladder",
  },
  {
    slug: "painting",
    name: "Painting",
    note: "Interior and exterior repaints",
    image: "/industries/painting.jpg",
    imageAlt: "House painter on a ladder painting the exterior trim of a home",
  },
  {
    slug: "landscaping",
    name: "Landscaping & Lawn",
    note: "Seasonal contracts and installs",
    image: "/industries/landscaping.jpg",
    imageAlt: "Landscaper mowing clean stripes into a suburban front lawn",
  },
  {
    slug: "remodeling",
    name: "Remodeling",
    note: "Kitchens, baths, and additions",
    image: "/industries/remodeling.jpg",
    imageAlt:
      "Contractor reviewing plans with a homeowner in a kitchen under renovation",
  },
  {
    slug: "concrete",
    name: "Concrete & Masonry",
    note: "Driveways, patios, and flatwork",
    image: "/industries/concrete.jpg",
    imageAlt: "Concrete finishers floating a freshly poured driveway slab",
  },
  {
    slug: "decks-fencing",
    name: "Decks & Fencing",
    note: "Builds, replacements, and repairs",
    image: "/industries/decks-fencing.jpg",
    imageAlt: "Carpenter fastening cedar deck boards on a new backyard deck",
  },
  {
    slug: "pressure-washing",
    name: "Pressure Washing",
    note: "Driveways, siding, and exteriors",
    image: "/industries/pressure-washing.jpg",
    imageAlt: "Worker pressure washing a concrete driveway clean",
  },
];
