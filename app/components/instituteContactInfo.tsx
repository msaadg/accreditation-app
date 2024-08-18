import Link from "next/link";
import React from "react";

export const InstituteContactInfo = ({
  schoolWeb,
  schoolContact,
  socialMedia,
  scrollToEnquiryForm,
}: {
  schoolWeb: string;
  schoolContact: string;
  socialMedia: {
    facebook: string;
    instagram: string;
    twitter: string;
    linkedin: string;
    youtube: string;
  };
  scrollToEnquiryForm: () => void;
}) => {
  return (
    <div className="m-16 grid grid-cols-2 gap-8">
      <div className="flex flex-col justify-between space-y-6 bg-gray-100 p-8">
        <div className="flex justify-between">
          <h3 className="font-bold text-lg text-gray-800">School’s webpage:</h3>
          <Link
            href={schoolWeb}
            target="_blank"
            rel="noopener noreferrer"
            className="flex bg-customOrange text-white font-bold py-4 px-4 rounded-md gap-2"
          >
            Visit Website{" "}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
            </svg>

          </Link>
        </div>
        <div className="flex justify-between">
          <h3 className="font-bold text-lg text-gray-800">Contact Page:</h3>
          <Link
            href={schoolContact}
            target="_blank"
            rel="noopener noreferrer"
            className="flex bg-customOrange text-white font-bold py-4 px-4 rounded-md gap-2"
          >
            Visit Website{" "}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
            </svg>
          </Link>
        </div>
      </div>

      <div className="flex flex-col space-y-6 bg-gray-100 p-8">
        <div className="flex justify-between">
          <h3 className="font-bold text-lg text-gray-800">Enquiry:</h3>
          <button
            onClick={scrollToEnquiryForm}
            className="flex bg-customOrange text-white font-bold py-4 px-4 rounded-md gap-2"
          >
            Contact The School{" "}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
            </svg>
          </button>
        </div>
        <div>
          <h3 className="font-bold text-lg text-gray-800">Social Media:</h3>
          <div className="flex space-x-4 mt-2">
            <Link href={socialMedia.facebook} target="_blank" rel="noopener noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="52" height="52" viewBox="0 0 50 50" className="hover:cursor-pointer">
              <path fill="#dd9b2b" d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M37,19h-2c-2.14,0-3,0.5-3,2 v3h5l-1,5h-4v15h-5V29h-4v-5h4v-3c0-4,2-7,6-7c2.9,0,4,1,4,1V19z"></path>
            </svg>
            </Link>
            <Link href={socialMedia.instagram} target="_blank" rel="noopener noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="52" height="52" viewBox="0 0 50 50" className="hover:cursor-pointer">
              <path fill="#dd9b2b" d="M 16 3 C 8.83 3 3 8.83 3 16 L 3 34 C 3 41.17 8.83 47 16 47 L 34 47 C 41.17 47 47 41.17 47 34 L 47 16 C 47 8.83 41.17 3 34 3 L 16 3 z M 37 11 C 38.1 11 39 11.9 39 13 C 39 14.1 38.1 15 37 15 C 35.9 15 35 14.1 35 13 C 35 11.9 35.9 11 37 11 z M 25 14 C 31.07 14 36 18.93 36 25 C 36 31.07 31.07 36 25 36 C 18.93 36 14 31.07 14 25 C 14 18.93 18.93 14 25 14 z M 25 16 C 20.04 16 16 20.04 16 25 C 16 29.96 20.04 34 25 34 C 29.96 34 34 29.96 34 25 C 34 20.04 29.96 16 25 16 z"></path>
            </svg>
            </Link>
            <Link href={socialMedia.twitter} target="_blank" rel="noopener noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="52" height="52" viewBox="0 0 50 50" className="hover:cursor-pointer">
              <path fill="#dd9b2b" d="M 11 4 C 7.134 4 4 7.134 4 11 L 4 39 C 4 42.866 7.134 46 11 46 L 39 46 C 42.866 46 46 42.866 46 39 L 46 11 C 46 7.134 42.866 4 39 4 L 11 4 z M 13.085938 13 L 21.023438 13 L 26.660156 21.009766 L 33.5 13 L 36 13 L 27.789062 22.613281 L 37.914062 37 L 29.978516 37 L 23.4375 27.707031 L 15.5 37 L 13 37 L 22.308594 26.103516 L 13.085938 13 z M 16.914062 15 L 31.021484 35 L 34.085938 35 L 19.978516 15 L 16.914062 15 z"></path>
            </svg>
            </Link>
            <Link href={socialMedia.linkedin} target="_blank" rel="noopener noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="52" height="52" viewBox="0 0 50 50" className="hover:cursor-pointer">
              <path fill="#dd9b2b" d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path>
            </svg>
            </Link>
            <Link href={socialMedia.youtube} target="_blank" rel="noopener noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="52" height="52" viewBox="0 0 50 50" className="hover:cursor-pointer">
                <path fill="#dd9b2b" d="M 9 4 C 6.2504839 4 4 6.2504839 4 9 L 4 41 C 4 43.749516 6.2504839 46 9 46 L 41 46 C 43.749516 46 46 43.749516 46 41 L 46 9 C 46 6.2504839 43.749516 4 41 4 L 9 4 z M 9 6 L 41 6 C 42.668484 6 44 7.3315161 44 9 L 44 41 C 44 42.668484 42.668484 44 41 44 L 9 44 C 7.3315161 44 6 42.668484 6 41 L 6 9 C 6 7.3315161 7.3315161 6 9 6 z M 15 8 C 15.414 9.013 17.402 13.381141 18 14.994141 L 18 19 L 20 19 L 20 15 L 23 8 L 20.599609 8 L 19 12 L 17.400391 8 L 15 8 z M 25 11 C 23.994 11 23.228969 11.275313 22.667969 11.945312 C 22.234969 12.440312 22.001953 13.23425 22.001953 14.28125 L 22 15.726562 C 22 16.767563 22.205672 17.487516 22.638672 17.978516 C 23.200672 18.645516 24.111 19 25 19 C 25.889 19 26.815906 18.645562 27.378906 17.976562 C 27.804906 17.486562 28 16.767562 28 15.726562 L 28 14.275391 C 28 13.227391 27.758031 12.440312 27.332031 11.945312 C 26.770031 11.275313 25.889 11 25 11 z M 29 11 L 29 16.837891 C 29 17.497891 29.098281 17.946375 29.238281 18.234375 C 29.468281 18.707375 29.928844 18.949703 30.589844 18.970703 C 31.500844 19.000703 32.185 18.41 33 17.625 L 33 19 L 35 19 L 35 11 L 33 11 L 33 16.375 C 32.545 16.914 32.021375 17.392578 31.609375 17.392578 C 31.336375 17.392578 31.05 17.267 31 17 L 31 11 L 29 11 z M 25 12.619141 C 25.552 12.619141 26 13.076625 26 13.640625 L 26 16.447266 C 26 17.010266 25.552 17.46875 25 17.46875 C 24.448 17.46875 24 17.011266 24 16.447266 L 24 13.640625 C 24 13.077625 24.448 12.619141 25 12.619141 z M 24.990234 22 C 24.990234 22 18.280781 22.000312 13.800781 22.320312 C 13.170781 22.390313 11.809844 22.400391 10.589844 23.650391 C 9.6298437 24.590391 9.3203125 26.75 9.3203125 26.75 C 9.3203125 26.75 9 28.280547 9 30.810547 L 9 33.179688 C 9 35.709688 9.3203125 37.240234 9.3203125 37.240234 C 9.3203125 37.240234 9.6298438 39.399609 10.589844 40.349609 C 11.809844 41.589609 13.409141 41.549688 14.119141 41.679688 C 16.679141 41.919688 25 42 25 42 C 25 42 31.719219 41.989922 36.199219 41.669922 C 36.829219 41.599922 38.190156 41.589844 39.410156 40.339844 C 40.370156 39.399844 40.679688 37.240234 40.679688 37.240234 C 40.679688 37.240234 41 35.709688 41 33.179688 L 41 30.810547 C 41 28.280547 40.679688 26.75 40.679688 26.75 C 40.679688 26.75 40.370156 24.590391 39.410156 23.650391 C 38.190156 22.400391 36.829219 22.390312 36.199219 22.320312 C 31.719219 22.000312 25.009766 22 25.009766 22 L 24.990234 22 z M 12 26 L 18 26 L 18 28 L 16 28 L 16 38 L 14 38 L 14 28 L 12 28 L 12 26 z M 25 26 L 27 26 L 27 30.380859 C 27.75 29.500859 28.149141 28.99 29.119141 29 C 29.879141 29.01 30.490234 29.440703 30.740234 30.220703 C 30.870234 30.640703 31 31.390859 31 32.380859 L 31 35.130859 C 30.99 36.010859 30.899297 36.400313 30.779297 36.820312 C 30.529297 37.600313 29.879141 38 29.119141 38 C 28.449141 38 27.63 37.53 27 36.75 L 27 38 L 25 38 L 25 26 z M 18 29 L 20 29 L 20 35.890625 C 20.05 36.180625 20.259531 36.289062 20.519531 36.289062 C 20.919531 36.289062 21.56 35.849531 22 35.269531 L 22 29 L 24 29 L 24 38 L 22 38 L 22 36.630859 C 21.21 37.490859 20.269062 38 19.539062 38 C 18.899062 38 18.450469 37.720937 18.230469 37.210938 C 18.100469 36.890937 18 36.409453 18 35.689453 L 18 29 z M 35.029297 29 C 36.019297 29 36.809375 29.319922 37.359375 29.919922 C 37.769375 30.359922 38 31.040469 38 31.980469 L 38 34 L 34 34 L 34 35.800781 C 34 36.260781 34.45 36.640625 35 36.640625 C 35.55 36.640625 36 36.260781 36 35.800781 L 36 35 L 38 35 C 38 35.51 37.939687 35.939609 37.929688 36.099609 C 37.859687 36.449609 37.700938 36.770781 37.460938 37.050781 C 36.920938 37.690781 36.110078 38 35.080078 38 C 34.040078 38 33.259453 37.699609 32.689453 37.099609 C 32.269453 36.669609 32 36.010078 32 35.080078 L 32 32.019531 C 32 31.079531 32.239922 30.359922 32.669922 29.919922 C 33.239922 29.319922 34.019297 29 35.029297 29 z M 35 30.449219 C 34.45 30.449219 34 30.819062 34 31.289062 L 34 32.609375 L 36 32.609375 L 36 31.289062 C 36 30.819063 35.55 30.449219 35 30.449219 z M 28.220703 30.75 C 28.065703 30.75 27.839531 30.827813 27.613281 30.945312 C 27.500156 31.004062 27.386406 31.072422 27.28125 31.146484 C 27.176094 31.220547 27.08 31.300859 27 31.380859 L 27 35.75 C 27.08 35.83 27.176094 35.904063 27.28125 35.96875 C 27.596719 36.162813 27.988203 36.279297 28.220703 36.279297 C 28.423203 36.279297 28.581836 36.22998 28.703125 36.111328 C 28.743555 36.071777 28.780625 36.024062 28.8125 35.96875 C 28.87625 35.858125 28.922187 35.714609 28.953125 35.533203 C 28.984063 35.351797 29 35.131641 29 34.869141 L 29 32.130859 C 29 31.868359 28.984063 31.649297 28.953125 31.470703 C 28.89125 31.113516 28.767187 30.913047 28.570312 30.818359 C 28.471875 30.771016 28.355703 30.75 28.220703 30.75 z"></path>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
