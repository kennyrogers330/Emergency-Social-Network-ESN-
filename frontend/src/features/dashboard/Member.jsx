/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import leoImage from './../../assets/images/leo.jpg'
import okayImage from '../../assets/icon/okay.png'
import helpImage from '../../assets/icon/help.png'
import emergencyImage from '../../assets/icon/emergency.png'

function Member({ member, status, healthStatus }) {
  return (
    <>
      {member ? (
        <div className={`flex flex-row mt-2 items-center`}>
          <img
            className="object-cover h-10 rounded-lg m-2 flex-shrink-0"
            src={leoImage}
            alt="profile"
          />

          <div className="flex flex-col ml-4">
            <div className="font-bold">{member}</div>
            <div className="flex gap-4">
              <div
                className={`font-normal ${
                  status === 'offline' ? 'text-red-600' : 'text-green-600'
                }`}
              >
                {status}
              </div>
              <div>
                {healthStatus === 'OK' ? (
                  <img src={okayImage} alt="" className="w-6 h-6" />
                ) : healthStatus === 'Help' ? (
                  <img src={helpImage} alt="" className="w-6 h-6" />
                ) : (
                  <img src={emergencyImage} alt="" className="w-6 h-6" />
                )}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="">No users available</div>
      )}
    </>
  )
}
export default Member
