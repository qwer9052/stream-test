import React, { useState, useRef, useEffect, useCallback } from 'react';
import io from 'socket.io-client';
import Video from './Components/Video';
import { WebRTCUser } from './types';
import VideoApp from './VideoApp';
import { Button } from '@material-ui/core';

const App = () => {
	const [auth, setAuth] = useState<'admin' | 'user'>();
	// 상태 변수를 사용하여 입력된 텍스트를 관리
	const [email, setEmail] = useState();

	// 입력 필드의 값이 변경될 때 호출되는 함수
	const handleInputChange = (event: any) => {
		setEmail(event.target.value);
	};

	return (
		<div>
			{auth && email ? (
				<VideoApp auth={auth} email={email} />
			) : (
				<div style={{ display: 'flex' }}>
					<input
						type="email"
						value={email}
						onChange={handleInputChange}
						placeholder="다르게 이메일 입력"
					/>
					<Button
						style={{
							width: 300,
							height: 100,
							color: '#000',
							backgroundColor: '#ffaadd',
						}}
						onClick={() => setAuth('admin')}
					>
						영상켜기
					</Button>
					<Button
						style={{
							width: 300,
							height: 100,
							color: '#000',
							backgroundColor: '#aaaacc',
						}}
						title="게스트 참여"
						onClick={() => setAuth('user')}
					>
						게스트 참여
					</Button>
				</div>
			)}
		</div>
	);
};

export default App;
