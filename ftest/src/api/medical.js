import React, { useState, useEffect } from "react";
import axios from 'axios';

export const MedicalInfoComponent = () => {
    const [medicalInfo, setMedicalInfo] = useState(null);
    const pk = 1; // 원하는 pk 값을 설정?

    useEffect(() => {
        const fetchMedicalInfo = async () => {
            try {
                const response = await axios.get(
                    `https://silverjek.pythonanywhere.com/medicalinfo/access/${pk}/`,
                    {
                        params: {
                            pk: pk,
                        },
                    }
                );

                // 응답 데이터를 상태에 저장
                setMedicalInfo(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchMedicalInfo();
    }, [pk]);
}