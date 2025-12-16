import React, { useState } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import './login.css';
import { useTeststore } from '../store';

enum Perssion {
  FIANCE = 'finance',
  MALL = 'mall',
  TRAVEL = 'travel',
}

export type User = {
  name: string;
  permissions: Array<Perssion>;
};

const users: User[] = [
  { name: 'tom', permissions: [Perssion.FIANCE, Perssion.MALL, Perssion.TRAVEL] },
  { name: 'jay', permissions: [Perssion.MALL, Perssion.TRAVEL] },
  { name: 'okk', permissions: [Perssion.FIANCE, Perssion.TRAVEL] },
];

const Login = () => {
  const { setinfo } = useTeststore();
  const [formData, setFormData] = useState({
    name: '',
    password: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || '/dashboard';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    const currentUser = users.find((user) => user.name === formData.name);

    if (currentUser) {
      setinfo({ currentUser, loginTime: Date.now() + '' });
      const permissin_route = currentUser.permissions[0];
      navigate(`/${permissin_route}`);
    }
    // try {
    //   const result = await login(formData);
    //   if (result.success) {
    //     navigate(from, { replace: true });
    //   } else {
    //     setError(result.error || '登录失败');
    //   }
    // } catch (err) {
    //   setError('登录过程中出现错误');
    // } finally {
    //   setLoading(false);
    // }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className='login-page'>
      <div className='login-card'>
        <div className='login-header'>
          <h2>欢迎回来</h2>
          <p>请登录您的账户</p>
        </div>

        {error && <div className='error-alert'>{error}</div>}

        <form onSubmit={handleSubmit} className='login-form'>
          <div className='form-group'>
            <input name='name' value={formData.name} onChange={handleChange} placeholder='请输入名称' required />
          </div>

          <div className='form-group'>
            <label>密码</label>
            <div className='password-input'>
              <input
                type={showPassword ? 'text' : 'password'}
                name='password'
                value={formData.password}
                onChange={handleChange}
                placeholder='请输入密码'
                required
              />
              <button type='button' onClick={() => setShowPassword(!showPassword)} className='toggle-password'></button>
            </div>
          </div>

          <div className='form-options'>
            <label className='remember-me'>
              <input type='checkbox' />
              记住我
            </label>
            <Link to='/forgot-password' className='forgot-password'>
              忘记密码？
            </Link>
          </div>

          <button type='submit' className='login-btn' disabled={loading}>
            {loading ? '登录中...' : '登录'}
          </button>

          <div className='login-footer'>
            <p>
              还没有账户？{' '}
              <Link to='/register' className='register-link'>
                立即注册
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
