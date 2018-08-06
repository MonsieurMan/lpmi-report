"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var mdPdf = __importStar(require("markdown-pdf"));
mdPdf().from('path').to('path', function () { }); // $ExpectType void
mdPdf().from.string('markdown').to('path', function () { }); // $ExpectType void
mdPdf({ paperOrientation: 'landscape', paperFormat: 'A3' }).from('lol').to('lol', function () { }); // $ExpectType void
mdPdf().concat.from.paths(['lol', 'lol'], {}).to('path', function () { }); // $ExpectType void
mdPdf().concat.from.strings(['lol', 'lol'], {}).to('path', function () { }); // $ExpectType void
mdPdf().from('path').to.path('path', function () { }); // $ExpectType void
mdPdf().from('path').to('path'); // $ExpectType void
//mdPdf({ paperFormat: 'wrongFormat' }); // $ExpectError
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFya2Rvd24tcGRmLXRlc3RzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWFya2Rvd24tcGRmLXRlc3RzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLGtEQUFzQztBQUV0QyxLQUFLLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLE1BQU0sRUFBRSxjQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsbUJBQW1CO0FBQy9ELEtBQUssRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUMsRUFBRSxDQUFDLE1BQU0sRUFBRSxjQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsbUJBQW1CO0FBQzFFLEtBQUssQ0FBQyxFQUFFLGdCQUFnQixFQUFFLFdBQVcsRUFBRSxXQUFXLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUssRUFBRSxjQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsbUJBQW1CO0FBQ2pILEtBQUssRUFBRSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxNQUFNLEVBQUUsY0FBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLG1CQUFtQjtBQUN4RixLQUFLLEVBQUUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsTUFBTSxFQUFFLGNBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxtQkFBbUI7QUFDMUYsS0FBSyxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLGNBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxtQkFBbUI7QUFDcEUsS0FBSyxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLG1CQUFtQjtBQUVwRCx3REFBd0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBtZFBkZiBmcm9tICdtYXJrZG93bi1wZGYnO1xyXG5cclxubWRQZGYoKS5mcm9tKCdwYXRoJykudG8oJ3BhdGgnLCAoKSA9PiB7IH0pOyAvLyAkRXhwZWN0VHlwZSB2b2lkXHJcbm1kUGRmKCkuZnJvbS5zdHJpbmcoJ21hcmtkb3duJykudG8oJ3BhdGgnLCAoKSA9PiB7IH0pOyAvLyAkRXhwZWN0VHlwZSB2b2lkXHJcbm1kUGRmKHsgcGFwZXJPcmllbnRhdGlvbjogJ2xhbmRzY2FwZScsIHBhcGVyRm9ybWF0OiAnQTMnIH0pLmZyb20oJ2xvbCcpLnRvKCdsb2wnLCAoKSA9PiB7IH0pOyAvLyAkRXhwZWN0VHlwZSB2b2lkXHJcbm1kUGRmKCkuY29uY2F0LmZyb20ucGF0aHMoWydsb2wnLCAnbG9sJ10sIHt9KS50bygncGF0aCcsICgpID0+IHsgfSk7IC8vICRFeHBlY3RUeXBlIHZvaWRcclxubWRQZGYoKS5jb25jYXQuZnJvbS5zdHJpbmdzKFsnbG9sJywgJ2xvbCddLCB7fSkudG8oJ3BhdGgnLCAoKSA9PiB7IH0pOyAvLyAkRXhwZWN0VHlwZSB2b2lkXHJcbm1kUGRmKCkuZnJvbSgncGF0aCcpLnRvLnBhdGgoJ3BhdGgnLCAoKSA9PiB7IH0pOyAvLyAkRXhwZWN0VHlwZSB2b2lkXHJcbm1kUGRmKCkuZnJvbSgncGF0aCcpLnRvKCdwYXRoJyk7IC8vICRFeHBlY3RUeXBlIHZvaWRcclxuXHJcbi8vbWRQZGYoeyBwYXBlckZvcm1hdDogJ3dyb25nRm9ybWF0JyB9KTsgLy8gJEV4cGVjdEVycm9yXHJcbiJdfQ==