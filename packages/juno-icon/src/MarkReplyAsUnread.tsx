import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const MarkReplyAsUnread = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="M14.368 6.667c.455 0 .842.158 1.161.474.292.29.466.634.521 1.033l.012.11v4.249c0 .224.168.409.383.433l.047.003h.445c1.53 0 2.96.297 4.289.892 1.348.595 2.522 1.408 3.524 2.44s1.794 2.235 2.377 3.611c.55 1.317.841 2.708.872 4.174l.003.259v2.649c0 .52-.25.809-.751.864s-.815-.177-.942-.697a6.683 6.683 0 0 0-.847-2.119c-.401-.669-.883-1.241-1.448-1.715s-1.202-.86-1.912-1.157a6.25 6.25 0 0 0-2-.438l-.212-.008h-3.395a.432.432 0 0 0-.427.388l-.003.047v4.082c0 .242-.041.469-.123.683s-.205.404-.369.572c-.286.292-.63.457-1.032.495l-.102.007-.11.002a1.613 1.613 0 0 1-.882-.265l-.086-.06-.083-.067-8.769-9.035a1.592 1.592 0 0 1-.505-1.157 1.866 1.866 0 0 1 .331-1.124l.065-.089 8.769-9.007c.164-.167.351-.297.56-.39s.423-.139.642-.139zm-.307 2.476-7.973 8.189 7.973 8.216.003-3.494.011-.154a2.434 2.434 0 0 1 2.21-2.167l.206-.009 3.473.002.243.01c.921.05 1.804.243 2.664.59a9.392 9.392 0 0 1 2.735 1.743l.163.158-.069-.296a9.203 9.203 0 0 0-.258-.832l-.159-.406a9.644 9.644 0 0 0-1.97-2.998 9.134 9.134 0 0 0-2.906-2.008 8.277 8.277 0 0 0-3.007-.707l-.465-.011-.554-.003-.156-.012a2.433 2.433 0 0 1-2.156-2.216l-.008-.205V9.142zm10.606-6.476a4.667 4.667 0 1 1 0 9.334 4.667 4.667 0 0 1 0-9.334zm0 1.866a2.8 2.8 0 1 0 .001 5.601 2.8 2.8 0 0 0-.001-5.601z" />
    </svg>
  )),
);
MarkReplyAsUnread.displayName = 'MarkReplyAsUnread';
MarkReplyAsUnread['iconName'] = 'mark-reply-as-unread';
export default MarkReplyAsUnread;
