import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const IdBorder = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="M28.255 5.034c-1.052-.698-2.285-1.033-3.67-1.033L22.701 4c-.831 0-1.452.503-1.452 1.308v7.95c0 .806.621 1.242 1.452 1.242h1.884c1.371 0 2.631-.376 3.683-1.087 1.053-.738 1.731-2.579 1.731-4.23 0-1.624-.678-3.465-1.745-4.149zM23 5.75h1.265c2.728 0 3.985 1.113 3.985 3.349s-1.221 3.651-3.985 3.651H23v-7zm-12.801-.129a2.996 2.996 0 0 0-1.38-1.313l-.002.001a3.171 3.171 0 0 0-1.866-.269c-.481.075-1.063.285-1.766.627-.689.334-1.221.655-1.599.971-.817.685-1.312 1.613-1.49 2.755-.185 1.081-.101 2.3.246 3.651.341 1.327.93 2.747 1.766 4.261.831 1.523 1.9 3.066 3.206 4.63a32.018 32.018 0 0 0 3.017 3.119l.377.342a21.313 21.313 0 0 0 2.663 2.036c1.029.659 2.039 1.166 3.032 1.52 1.018.363 1.997.547 2.936.547.579 0 1.114-.076 1.6-.231a3.928 3.928 0 0 0 1.326-.716l.141-.111c.335-.276.717-.671 1.133-1.175.483-.585.808-1.08.977-1.499l.076-.17c.183-.461.208-.985.065-1.525-.158-.599-.5-1.116-1.012-1.537l-.988-.821-.829-.704-.402-.349a61.83 61.83 0 0 1-1.632-1.485c-.421-.451-1.017-.73-1.719-.792a3.127 3.127 0 0 0-1.898.423c-.223.15-.39.281-.54.417l-.043.039-.238.232-.222.23-.074.094-.07.069-.191.209a3.776 3.776 0 0 1-.273-.139 5.363 5.363 0 0 1-.934-.692 12.245 12.245 0 0 1-1.162-1.217c-.386-.461-.704-.89-.954-1.282a5.638 5.638 0 0 1-.527-1.01l-.086-.226a2.032 2.032 0 0 1-.073-.254 2.59 2.59 0 0 1 .126-.059l.039-.019.156-.086.15-.073a.99.99 0 0 0 .191-.12 5.182 5.182 0 0 0 .898-.617c.502-.506.775-1.051.855-1.663.081-.621-.063-1.217-.425-1.765a44.232 44.232 0 0 1-1.484-2.276 29.261 29.261 0 0 1-1.1-1.982zM5.95 6.24c.57-.276.995-.428 1.27-.471l.002-.001c.298-.046.575-.007.854.124l.105.055c.201.117.355.279.484.514.312.625.701 1.325 1.137 2.046s.947 1.505 1.543 2.367a.762.762 0 0 1 .129.543l-.018.095a1.051 1.051 0 0 1-.253.462l-.043.046-.089.073-.153.111c-.085.059-.185.12-.303.184l-.125.075-.044.031-.097.047-.156.086-.219.105a1.751 1.751 0 0 0-.897 1.892c.049.246.134.501.255.799l.064.16c.15.355.353.729.605 1.125.293.46.657.949 1.088 1.465.473.559.916 1.023 1.34 1.401.432.385.847.692 1.249.916.143.08.277.148.402.204a1.749 1.749 0 0 0 2.012-.413l.137-.151.139-.142.079-.091.032-.041.199-.202.14-.133.069-.06c.048-.04.102-.081.165-.127l.043-.031.104-.055c.221-.102.458-.141.724-.117.281.025.475.115.596.244l.077.077.546.509c.368.339.745.679 1.131 1.018l.412.359.715.608 1.133.943c.236.194.371.399.434.635.053.202.041.352-.015.464l-.093.206c-.107.221-.327.546-.669.96-.395.479-.732.819-.973.999l-.136.105a2.23 2.23 0 0 1-.672.343 3.513 3.513 0 0 1-1.07.149c-.727 0-1.509-.146-2.348-.445-.862-.307-1.753-.755-2.677-1.346a20.127 20.127 0 0 1-2.795-2.189 30.501 30.501 0 0 1-2.873-2.969c-1.226-1.468-2.229-2.918-3.003-4.334-.773-1.401-1.305-2.686-1.606-3.858-.29-1.129-.356-2.102-.216-2.92.12-.768.411-1.309.891-1.711.247-.206.661-.457 1.239-.738zM19.5 4.875a.875.875 0 0 0-1.75 0v8.75a.875.875 0 0 0 1.75 0v-8.75z" />
    </svg>
  )),
);
IdBorder.displayName = 'IdBorder';
IdBorder['iconName'] = 'ID_border';
export default IdBorder;